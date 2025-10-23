'use client';

// React & Next.js imports
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BookOpen, LayoutDashboard, LogOut, Loader2, TagIcon, Calendar, Activity, Smile, Frown, Meh, Sparkles, ChevronRight } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Timestamp } from 'firebase/firestore'; // Import the Timestamp type

// Firebase & Auth imports
import { db, auth } from './firebaseConfig';
import { doc, getDoc, setDoc, addDoc, collection, onSnapshot, query, orderBy, serverTimestamp } from 'firebase/firestore';
import { GoogleAuthProvider, signInWithPopup, signInAnonymously } from 'firebase/auth';
import { onAuthStateChanged, User } from 'firebase/auth';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// ==================================================================
// TYPE DEFINITIONS
// ==================================================================

// Defines the structure for a single journal entry
export interface JournalEntry {
  id: string;
  date: Timestamp;
  sentiment: 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL' | string;
  labels: string[];
  activities: string[];
  originalText?: string;
}

// Defines the structure for a single coping strategy
export interface Strategy {
  title: string;
  text: string;
  emoji: string;
  requiredTags: string[];
}

// Defines the structure for a single habit
export interface Habit {
  id: string;
  name: string;
  target: number;
  progress: number;
  emoji: string;
}

// Defines the main analysis result from the AI
type AnalysisResult = {
  sentiment: 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL' | string;
  labels: string[];
  activities: string[];
};

// Defines the data structure for the user's streak
type StreakData = {
  streakCount: number;
  lastJournalDate: string | null;
};

// Defines the two main tabs/views of the app
type View = 'journal' | 'dashboard';

// ==================================================================
// CONSTANTS
// ==================================================================

const ALL_ACTIVITIES = ["Exercise", "Social", "Work", "Hobby", "Rest", "Nutrition"];

const initialHabits: Habit[] = [
  { id: 'exercise', name: 'Exercise', target: 3, progress: 0, emoji: '💪' },
  { id: 'mindful', name: 'Mindful Minutes', target: 5, progress: 0, emoji: '🧘' },
  { id: 'hydrate', name: 'Hydrate (8 glasses)', target: 7, progress: 0, emoji: '💧' },
];

// Helper to get a date in YYYY-MM-DD format, crucial for streak logic
const getISODate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

// ==================================================================
// HELPER: STRATEGY ENGINE
// ==================================================================

const strategyLibrary: Strategy[] = [
  {
    title: "Feeling Anxious about Work?",
    text: "Try the 'Urgent-Important Matrix' to organize your tasks. Focusing on what's truly important can reduce feelings of being overwhelmed.",
    emoji: "📋",
    requiredTags: ["Anxiety", "Work"],
  },
  {
    title: "Feeling Down about Relationships?",
    text: "Consider writing a short, positive message to a friend or family member. Expressing gratitude can strengthen bonds and lift your spirits.",
    emoji: "💌",
    requiredTags: ["Sadness", "Relationships"],
  },
  {
    title: "Feeling Fatigued?",
    text: "Your energy seems low. A short, 10-minute walk can boost circulation and mental clarity more effectively than staying seated.",
    emoji: "🚶‍♀️",
    requiredTags: ["Fatigue"],
  },
  {
    title: "Feeling Anxious?",
    text: "When you feel overwhelmed, try the 4-7-8 breathing technique. Inhale for 4s, hold for 7s, and exhale for 8s to calm your nervous system.",
    emoji: "🌬️",
    requiredTags: ["Anxiety"],
  },
  {
    title: "Feeling Sad?",
    text: "It's okay to feel this way. Try writing down three small things you are grateful for today. This practice can gently shift your perspective.",
    emoji: "❤️",
    requiredTags: ["Sadness"],
  },
];

export function getPersonalizedStrategy(analysis: AnalysisResult): Strategy {
  let bestMatch: Strategy | null = null;
  let highestScore = 0;
  const allUserTags = [...analysis.labels, ...analysis.activities];

  for (const strategy of strategyLibrary) {
    const score = strategy.requiredTags.reduce((acc, tag) => {
      return allUserTags.includes(tag) ? acc + 1 : acc;
    }, 0);
    if (score > highestScore) {
      highestScore = score;
      bestMatch = strategy;
    }
  }

  return bestMatch || {
    title: "Your Daily Insight ✨",
    text: "Reflecting on your feelings is a powerful step. Notice the patterns in your thoughts and activities.",
    emoji: "🧠",
    requiredTags: [],
  };
}


// ==================================================================
// HELPER: useAuth Hook
// ==================================================================

function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return { user, loading };
}

// ==================================================================
// UI COMPONENTS
// ==================================================================

// ---------------------------------
// LoginScreen Component
// ---------------------------------
function LoginScreen() {
  const [isGuestLoading, setIsGuestLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setIsGoogleLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error during Google login:", error);
      setIsGoogleLoading(false);
    }
  };

  const handleGuestLogin = async () => {
    setIsGuestLoading(true);
    try {
      await signInAnonymously(auth);
    } catch (error) {
      console.error("Error during guest login:", error);
      setIsGuestLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-slate-50 font-sans">
      <div className="w-full max-w-md text-center">
        <header className="mb-10">
          <h1 className="text-6xl font-bold text-indigo-600">Aura</h1>
          <p className="text-xl text-slate-600 mt-2">Your private space to reflect and grow.</p>
        </header>
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold text-slate-800 mb-6">Welcome Back</h2>
          <button
            onClick={handleGoogleLogin}
            disabled={isGoogleLoading || isGuestLoading}
            className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-sm flex items-center justify-center disabled:opacity-50"
          >
            {isGoogleLoading ? <Loader2 size={20} className="mr-2 animate-spin" /> : <Sparkles size={20} className="mr-2" />}
            Sign in with Google
          </button>
          <button
            onClick={handleGuestLogin}
            disabled={isGoogleLoading || isGuestLoading}
            className="w-full bg-slate-200 text-slate-700 font-bold py-3 px-4 rounded-lg hover:bg-slate-300 transition-all duration-300 mt-4 disabled:opacity-50"
          >
            {isGuestLoading ? <Loader2 size={20} className="mr-2 animate-spin" /> : <ChevronRight size={20} className="mr-2" />}
            Continue as Guest
          </button>
        </div>
        <p className="text-xs text-slate-500 mt-8">
          By signing in, you agree to our Terms of Service.
        </p>
      </div>
    </div>
  );
}

// ---------------------------------
// StreakTracker Component
// ---------------------------------
function StreakTracker({ streak }: { streak: number }) {
  if (streak === 0) return null; // Don't show the streak if it's 0

  return (
    <div key={streak} className="flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-sm border border-slate-200 animate-pop-in">
      <span className="text-2xl" role="img" aria-label="Streak flame">🔥</span>
      <span className="text-xl font-bold text-orange-500">{streak}</span>
    </div>
  );
}

// ---------------------------------
// BreathingExercise Component
// ---------------------------------
function BreathingExercise({ onClose }: { onClose: () => void }) {
  const phases = [
    { name: "Inhale", duration: 4 },
    { name: "Hold", duration: 7 },
    { name: "Exhale", duration: 8 },
  ];
  const totalCycles = 4;
  const [cycleIndex, setCycleIndex] = useState(-1);
  const [instruction, setInstruction] = useState("Get Ready");
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(c => c - 1);
    }, 1000);

    if (countdown === 0) {
      const nextCycleIndex = cycleIndex + 1;
      if (nextCycleIndex >= phases.length * totalCycles) {
        clearInterval(interval);
        onClose();
        return;
      }
      const phase = phases[nextCycleIndex % 3];
      setCycleIndex(nextCycleIndex);
      setInstruction(phase.name);
      setCountdown(phase.duration);
    }
    return () => clearInterval(interval);
  }, [countdown, cycleIndex, onClose]);

  return (
    <div className="fixed inset-0 bg-indigo-900 bg-opacity-95 flex flex-col items-center justify-center z-50 animate-fade-in">
      <button onClick={onClose} className="absolute top-6 right-6 text-white text-3xl font-bold opacity-70 hover:opacity-100">&times;</button>
      <div className="text-center">
        <div
          className="w-48 h-48 rounded-full border-4 border-white flex items-center justify-center transition-all duration-1000"
          style={{ transform: cycleIndex % 3 === 0 ? 'scale(1.1)' : 'scale(1)' }} // Inhale = grow
        >
          <div>
            <p className="text-white text-3xl font-bold">{instruction}</p>
            <p className="text-white text-5xl font-bold mt-2">{countdown}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------
// GoalTracker Component
// ---------------------------------
function GoalTracker({ habits, onUpdate, onReset }: { habits: Habit[], onUpdate: (id: string) => void, onReset: () => void }) {
  if (!habits || habits.length === 0) {
    // Render a placeholder or return null if habits haven't loaded yet
    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg animate-pulse">
            <div className="h-6 bg-slate-200 rounded w-3/4 mb-4"></div>
            <div className="space-y-4">
                <div className="h-10 bg-slate-200 rounded"></div>
                <div className="h-10 bg-slate-200 rounded"></div>
                <div className="h-10 bg-slate-200 rounded"></div>
            </div>
        </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-slate-800">This Week's Goals</h2>
        <button onClick={onReset} className="text-sm font-medium text-indigo-600 hover:text-indigo-800">Reset</button>
      </div>
      <div className="space-y-4">
        {habits.map(habit => (
          <div key={habit.id}>
            <div className="flex justify-between items-center">
              <span className="font-semibold">{habit.emoji} {habit.name}</span>
              <span className="text-sm text-slate-600">{habit.progress} / {habit.target}</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2.5 mt-1.5 overflow-hidden">
              <div
                className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${(habit.progress / habit.target) * 100}%` }}
              ></div>
            </div>
            <button
              onClick={() => onUpdate(habit.id)}
              disabled={habit.progress >= habit.target}
              className="mt-2 text-sm bg-slate-100 px-3 py-1 rounded-full hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Log +1
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------
// MoodChart Component
// ---------------------------------
function MoodChart({ history }: { history: JournalEntry[] }) {
  const [chartData, setChartData] = useState<any>({ datasets: [] });
  const [hasEnoughData, setHasEnoughData] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const recentEntries = history.filter(entry => {
      if (entry.date && typeof entry.date.toDate === 'function') {
        return entry.date.toDate() >= sevenDaysAgo;
      }
      return false;
    });

    if (recentEntries.length < 2) {
      setHasEnoughData(false);
      return;
    }

    setHasEnoughData(true);
    const sortedEntries = recentEntries.sort((a, b) => a.date.toDate().getTime() - b.date.toDate().getTime());
    const labels = sortedEntries.map(entry => entry.date.toDate().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
    const dataPoints = sortedEntries.map(entry => {
      if (entry.sentiment === 'POSITIVE') return 1;
      if (entry.sentiment === 'NEGATIVE') return -1;
      return 0;
    });

    setChartData({
      labels,
      datasets: [
        {
          label: 'Mood Trend',
          data: dataPoints,
          borderColor: 'rgb(79, 70, 229)',
          backgroundColor: 'rgba(79, 70, 229, 0.5)',
          tension: 0.1,
        },
      ],
    });
  }, [history]);

  if (!hasEnoughData) {
    return (
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Mood Analytics</h2>
        <div className="text-center p-4 bg-slate-100 rounded-lg">
          <p className="text-slate-600">Journal for a few more days to see your mood trend chart!</p>
        </div>
      </div>
    );
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Your Mood Over the Last 7 Days', font: { size: 16, weight: 'bold' } },
    },
    scales: {
      y: {
        ticks: {
          callback: function(value: any) {
            if (value === 1) return 'Positive';
            if (value === -1) return 'Negative';
            if (value === 0) return 'Neutral';
            return null;
          }
        },
        min: -1.5,
        max: 1.5,
      },
      x: { grid: { display: false } }
    },
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <Line options={chartOptions as any} data={chartData} />
    </div>
  );
}

// ---------------------------------
// WeeklySummary Component
// ---------------------------------
function WeeklySummary({ history }: { history: JournalEntry[] }) {
  const [showModal, setShowModal] = useState(false);
  const [summary, setSummary] = useState<any | null>(null);

  const calculateSummary = () => {
    if (typeof window === 'undefined') return;
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const recentEntries = history.filter(entry => {
      if (entry.date && typeof entry.date.toDate === 'function') {
        return entry.date.toDate() > sevenDaysAgo;
      }
      return false;
    });

    if (recentEntries.length === 0) {
      setSummary({ totalEntries: 0, moods: {}, topEmotion: 'N/A', topActivity: 'N/A' });
      return;
    }

    const moodCounts: { [key: string]: number } = { POSITIVE: 0, NEGATIVE: 0, NEUTRAL: 0 };
    const labelCounts: { [key: string]: number } = {};
    const activityOnPositiveDays: { [key: string]: number } = {};

    recentEntries.forEach(entry => {
      if (moodCounts[entry.sentiment] !== undefined) moodCounts[entry.sentiment]++;
      entry.labels.forEach(label => { labelCounts[label] = (labelCounts[label] || 0) + 1; });
      if (entry.sentiment === 'POSITIVE') {
        entry.activities.forEach(activity => {
          activityOnPositiveDays[activity] = (activityOnPositiveDays[activity] || 0) + 1;
        });
      }
    });

    const getTopItem = (obj: { [key: string]: number }) => {
      const top = Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b, '');
      return top || 'N/A';
    }

    setSummary({
      totalEntries: recentEntries.length,
      moods: moodCounts,
      topEmotion: getTopItem(labelCounts),
      topActivity: getTopItem(activityOnPositiveDays),
    });
  };

  const handleShowSummary = () => {
    calculateSummary(); // Calculate summary when button is clicked
    setShowModal(true);
  };

  const MoodStat = ({ mood, count, total }: { mood: string, count: number, total: number }) => {
    const percentage = total > 0 ? Math.round((count / total) * 100) : 0;
    const colors: { [key:string]: string } = { POSITIVE: 'bg-green-500', NEGATIVE: 'bg-rose-500', NEUTRAL: 'bg-slate-500' };
    return (
      <div>
        <div className="flex justify-between font-semibold text-sm">
          <span>{mood.charAt(0).toUpperCase() + mood.slice(1).toLowerCase()}</span>
          <span>{percentage}%</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2.5 mt-1"><div className={`${colors[mood] || 'bg-gray-400'} h-2.5 rounded-full`} style={{ width: `${percentage}%` }}></div></div>
      </div>
    );
  };

  return (
    <>
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Your Week</h2>
        <p className="text-slate-600 mb-4">Get a summary of your emotional trends and insights from the past 7 days.</p>
        <button onClick={handleShowSummary} className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-indigo-700 transition-all">Generate My Weekly Summary</button>
      </div>
      {showModal && summary && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-lg shadow-2xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center border-b pb-3 mb-4"><h2 className="text-2xl font-bold text-slate-800">Your Week in Review</h2><button onClick={() => setShowModal(false)} className="text-2xl font-bold text-slate-500 hover:text-slate-800">&times;</button></div>
            {summary.totalEntries > 0 ? (
              <div className="space-y-5">
                <div>
                  <h3 className="font-bold text-lg mb-2">Mood Breakdown</h3>
                  <div className="space-y-3"><MoodStat mood="POSITIVE" count={summary.moods.POSITIVE} total={summary.totalEntries} /><MoodStat mood="NEGATIVE" count={summary.moods.NEGATIVE} total={summary.totalEntries} /><MoodStat mood="NEUTRAL" count={summary.moods.NEUTRAL} total={summary.totalEntries} /></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Key Insights</h3>
                  <div className="mt-2 space-y-2 text-slate-700"><p><strong>Your most common feeling was:</strong> <span className="font-semibold text-indigo-700">{summary.topEmotion}</span></p><p><strong>Activity most linked to positive days:</strong> <span className="font-semibold text-green-700">{summary.topActivity}</span></p></div>
                </div>
                <div className="bg-indigo-50 p-3 rounded-lg border border-indigo-200"><p className="text-indigo-800"><strong>Pro-Tip:</strong> To boost your mood next week, try focusing on activities like **{summary.topActivity}**!</p></div>
              </div>
            ) : (<p className="text-center text-slate-600 py-8">Not enough data from the past week. Keep journaling to unlock your summary!</p>)}
          </div>
        </div>
      )}
    </>
  );
}

// ---------------------------------
// JournalHistory Component
// ---------------------------------
function JournalHistory({ history }: { history: JournalEntry[] }) {
  const getSentimentStyle = (sentiment: string) => {
    switch (sentiment) {
      case 'POSITIVE': return { icon: <Smile size={18} className="text-green-500" />, cardBorder: 'border-l-4 border-green-500' };
      case 'NEGATIVE': return { icon: <Frown size={18} className="text-rose-500" />, cardBorder: 'border-l-4 border-rose-500' };
      default: return { icon: <Meh size={18} className="text-slate-500" />, cardBorder: 'border-l-4 border-slate-500' };
    }
  };

  if (!history || history.length === 0) {
    return (
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Journal History</h2>
        <div className="text-center p-4 bg-slate-100 rounded-lg"><p className="text-slate-600">Your past journal entries will appear here.</p></div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Journal History</h2>
      <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
        {history.map(entry => {
          const { icon, cardBorder } = getSentimentStyle(entry.sentiment);
          const entryDate = entry.date?.toDate();
          return (
            <div key={entry.id} className={`p-4 rounded-lg bg-slate-50 border ${cardBorder}`}>
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <Calendar size={14} />
                  {entryDate ? entryDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'No date'}
                </div>
                {icon}
              </div>
              <p className="text-slate-700 mb-3">{entry.originalText || <i>(No text was saved for this entry)</i>}</p>
              <div className="flex flex-wrap items-center gap-2">
                {entry.labels && entry.labels.length > 0 && (
                  <div className="flex items-center gap-2">
                    <TagIcon size={14} className="text-slate-500" />
                    {entry.labels.map(label => <SmallTag key={label} text={label} color="bg-indigo-100 text-indigo-700" />)}
                  </div>
                )}
                {entry.activities && entry.activities.length > 0 && (
                  <div className="flex items-center gap-2">
                    <Activity size={14} className="text-slate-500" />
                    {entry.activities.map(activity => <SmallTag key={activity} text={activity} color="bg-orange-100 text-orange-700" />)}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ---------------------------------
// Generic UI Helper Components
// ---------------------------------
function TabButton({ icon, label, isActive, onClick }: { icon: React.ReactNode, label: string, isActive: boolean, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-bold transition-all ${isActive ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-600 hover:bg-slate-100/50'}`}
    >
      {icon} {label}
    </button>
  );
}

function Tag({ label, type }: { label: string, type: 'sentiment' | 'label' | 'activity' }) {
  const colors = {
    sentiment: { POSITIVE: 'bg-green-100 text-green-800', NEGATIVE: 'bg-rose-100 text-rose-800', NEUTRAL: 'bg-slate-100 text-slate-800' },
    label: { Anxiety: 'bg-purple-100 text-purple-800', Fatigue: 'bg-slate-100 text-slate-800', Sadness: 'bg-blue-100 text-blue-800', Work: 'bg-yellow-100 text-yellow-800', Family: 'bg-pink-100 text-pink-800', default: 'bg-indigo-100 text-indigo-800' },
    activity: 'bg-orange-100 text-orange-800 border border-orange-200',
  };
  let color;
  if (type === 'sentiment') color = (colors.sentiment as any)[label] || colors.label.default;
  else if (type === 'label') color = (colors.label as any)[label] || colors.label.default;
  else color = colors.activity;
  return <span className={`px-3 py-1 text-sm font-medium rounded-full ${color}`}>{type === 'activity' && '🏃‍♂️ '}{label}</span>;
}

const SmallTag = ({ text, color }: { text: string, color: string }) => (<span className={`px-2 py-0.5 text-xs font-medium rounded-full ${color}`}>{text}</span>);

function InsightCard({ analysis }: { analysis: AnalysisResult }) {
  const strategy = getPersonalizedStrategy(analysis);
  return (
    <div className="mt-6 bg-indigo-50 border border-indigo-200 rounded-lg p-4">
      <h3 className="font-bold text-lg text-indigo-800 flex items-center">{strategy.emoji} {strategy.title}</h3>
      <p className="text-indigo-700 mt-2">{strategy.text}</p>
    </div>
  );
}

function CorrelationCard({ analysis }: { analysis: AnalysisResult }) {
  if (!analysis.activities || analysis.activities.length === 0) return null;
  let insightText = null;
  if (analysis.sentiment === 'POSITIVE' && analysis.activities.includes('Exercise')) insightText = "Great job on exercising! It seems to have a positive impact on your mood.";
  else if (analysis.sentiment === 'POSITIVE' && analysis.activities.includes('Social')) insightText = "Connecting with others is powerful. It looks like it boosted your spirits today!";
  else if (analysis.labels.includes('Fatigue') && analysis.activities.includes('Work')) insightText = "We noticed you logged 'Work' and are feeling fatigued. Remember to take regular breaks to recharge.";
  if (!insightText) return null;
  return (
    <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4">
      <h3 className="font-bold text-lg text-green-800 flex items-center">📈 Correlation Insight</h3>
      <p className="text-green-700 mt-2">{insightText}</p>
    </div>
  );
}


// ==================================================================
// APP WRAPPER (Main Export)
// ==================================================================
export default function AppWrapper() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <Loader2 size={48} className="text-indigo-600 animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <LoginScreen />;
  }

  // If the user is logged in, show the main homepage
  return <HomePage user={user} />;
}

// ==================================================================
// HOME PAGE (The main app)
// ==================================================================
function HomePage({ user }: { user: User }) {
  // --- State Variables ---
  const [journalText, setJournalText] = useState('');
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState('');
  const [showBreathingExercise, setShowBreathingExercise] = useState(false);
  const [streak, setStreak] = useState(0);
  const [view, setView] = useState<View>('journal');
  const [journalHistory, setJournalHistory] = useState<JournalEntry[]>([]);
  const [habits, setHabits] = useState<Habit[]>(initialHabits); // Initialize with default

  // --- Data Loading Effect ---
  useEffect(() => {
    if (!user) return;

    // --- Profile Listener (Streak & Habits) ---
    const profileDocRef = doc(db, 'users', user.uid);
    const unsubscribeProfile = onSnapshot(profileDocRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();

        // Streak logic
        const streakData = data.streakData || { streakCount: 0, lastJournalDate: null };
        const today = getISODate(new Date());
        const yesterday = getISODate(new Date(Date.now() - 86400000));

        if (streakData.lastJournalDate === today || streakData.lastJournalDate === yesterday) {
          setStreak(streakData.streakCount);
        } else if (streakData.lastJournalDate) {
          setStreak(0); // Streak is broken
        } else {
            setStreak(0); // Ensure streak is 0 if no data
        }

        // Habits logic - use default if none exist in DB
        setHabits(data.habits || initialHabits);
      } else {
        // Create a new user profile document if it doesn't exist
        setDoc(profileDocRef, {
          email: user.email || 'guest',
          streakData: { streakCount: 0, lastJournalDate: null },
          habits: initialHabits
        });
        setHabits(initialHabits); // Set initial habits locally too
        setStreak(0); // Ensure streak is 0 for new users
      }
    }, (error) => {
      console.error("Error fetching user profile:", error);
      // Handle error appropriately, maybe show a message to the user
      setError("Could not load your profile data.");
    });

    // --- Journal History Listener ---
    const journalsColRef = collection(db, 'users', user.uid, 'journals');
    const q = query(journalsColRef, orderBy('date', 'desc'));
    const unsubscribeJournals = onSnapshot(q, (snapshot) => {
      const history = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as JournalEntry));
      setJournalHistory(history);
    }, (error) => {
      console.error("Error fetching journal history:", error);
      setError("Could not load your journal history.");
    });

    return () => {
      unsubscribeProfile();
      unsubscribeJournals();
    };
  }, [user]);

  // --- Handlers ---
  const handleAnalyze = async () => {
    if (!user || !journalText.trim()) {
      setError('Please write something in your journal first.');
      return;
    }
    setIsLoading(true); setError(''); setAnalysis(null);
    try {
      const response = await axios.post('http://127.0.0.1:8000/analyze', { text: journalText, activities: selectedActivities });
      if (response.data.error) throw new Error(response.data.error);
      setAnalysis(response.data);

      // Save new journal entry to Firestore
      const newEntry = {
        date: serverTimestamp(),
        sentiment: response.data.sentiment,
        labels: response.data.labels,
        activities: response.data.activities,
        originalText: journalText,
      };
      await addDoc(collection(db, 'users', user.uid, 'journals'), newEntry);

      // Update streak in Firestore
      const profileDocRef = doc(db, 'users', user.uid);
      const profileDoc = await getDoc(profileDocRef);
      // Use profileDoc.data() directly, ensuring it exists after creation
      const streakData = profileDoc.exists() ? profileDoc.data().streakData : { streakCount: 0, lastJournalDate: null };

      const today = getISODate(new Date());
      const yesterday = getISODate(new Date(Date.now() - 86400000));
      let newStreakCount = streakData?.streakCount || 0; // Default to 0 if streakData is null/undefined

      if (streakData?.lastJournalDate === today) { /* No change */ }
      else if (streakData?.lastJournalDate === yesterday) newStreakCount += 1;
      else newStreakCount = 1;

      await setDoc(profileDocRef, { streakData: { streakCount: newStreakCount, lastJournalDate: today } }, { merge: true });

      // Clear the form
      setJournalText('');
      setSelectedActivities([]);

    } catch (err) {
      console.error(err);
      setError('Sorry, we couldn\'t analyze your entry. The AI server might be busy or offline.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleHabitUpdate = async (id: string) => {
    const updatedHabits = habits.map(h => (h.id === id && h.progress < h.target) ? { ...h, progress: h.progress + 1 } : h);
    setHabits(updatedHabits); // Optimistic update
    try {
        const profileDocRef = doc(db, 'users', user.uid);
        await setDoc(profileDocRef, { habits: updatedHabits }, { merge: true });
    } catch (error) {
        console.error("Error updating habits:", error);
        setError("Could not save habit progress.");
        // Optional: Revert local state if save fails
        // setHabits(habits);
    }
  };

  const handleHabitReset = async () => {
    const resetHabits = habits.map(h => ({ ...h, progress: 0 }));
    setHabits(resetHabits); // Optimistic update
    try {
        const profileDocRef = doc(db, 'users', user.uid);
        await setDoc(profileDocRef, { habits: resetHabits }, { merge: true });
    } catch (error) {
        console.error("Error resetting habits:", error);
        setError("Could not reset habit progress.");
        // Optional: Revert local state if save fails
        // setHabits(habits);
    }
  };


  // --- Render JSX ---
  return (
    <>
      {showBreathingExercise && <BreathingExercise onClose={() => setShowBreathingExercise(false)} />}
      <main className="flex min-h-screen flex-col items-center bg-slate-50 font-sans">
        <header className="w-full max-w-2xl px-4 pt-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-indigo-800">Aura</h1>
            <div className="flex items-center gap-4">
              <StreakTracker streak={streak} />
              <button onClick={() => auth.signOut()} className="p-2 rounded-full hover:bg-slate-200" title="Log Out">
                <LogOut size={20} className="text-slate-600"/>
              </button>
            </div>
          </div>
        </header>

        <nav className="w-full max-w-2xl p-4 sticky top-0 z-10 bg-slate-50">
          <div className="flex justify-center space-x-2 rounded-lg bg-slate-200 p-1.5">
            <TabButton icon={<BookOpen size={18} />} label="Journal" isActive={view === 'journal'} onClick={() => setView('journal')} />
            <TabButton icon={<LayoutDashboard size={18} />} label="Dashboard" isActive={view === 'dashboard'} onClick={() => setView('dashboard')} />
          </div>
        </nav>

        <div className="w-full max-w-2xl p-4 pb-20"> {/* Add padding-bottom */}
          {/* JOURNAL TAB */}
          {view === 'journal' && (
            <div className="animate-fade-in space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <textarea value={journalText} onChange={(e) => setJournalText(e.target.value)} placeholder="How are you feeling today?" className="w-full h-40 p-3 border-slate-200 border rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none" disabled={isLoading} />
                <div className="mt-4">
                  <h3 className="text-md font-semibold text-slate-700 mb-2">What did you do today?</h3>
                  <div className="flex flex-wrap gap-2">
                    {ALL_ACTIVITIES.map(activity => <button key={activity} onClick={() => setSelectedActivities(p => p.includes(activity) ? p.filter(a => a !== activity) : [...p, activity])} className={`px-3 py-1.5 text-sm font-medium rounded-full border transition-all ${selectedActivities.includes(activity) ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'}`}>{activity}</button>)}
                  </div>
                </div>
                <button onClick={handleAnalyze} disabled={isLoading} className="w-full mt-6 bg-indigo-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-indigo-700 disabled:bg-slate-400 disabled:cursor-not-allowed shadow-md flex items-center justify-center">
                  {isLoading && <Loader2 size={20} className="mr-2 animate-spin" />}
                  {isLoading ? 'Analyzing...' : 'Analyze My Feelings'}
                </button>
              </div>
              {error && <p className="text-rose-500 text-center mt-4">{error}</p>}
              {analysis && (
                <div className="bg-white p-6 rounded-2xl shadow-lg animate-fade-in">
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">Your Analysis</h2>
                  <div className="flex flex-wrap gap-2"><Tag label={analysis.sentiment} type="sentiment" />{analysis.labels.map(label => <Tag key={label} label={label} type="label" />)}{analysis.activities.map(activity => <Tag key={activity} label={activity} type="activity" />)}</div>
                  <InsightCard analysis={analysis} /><CorrelationCard analysis={analysis} />
                  {analysis.labels.includes("Anxiety") && <button onClick={() => setShowBreathingExercise(true)} className="w-full mt-4 bg-violet-600 text-white font-bold py-2 px-4 rounded-xl hover:bg-violet-700">Try a Guided Breathing Exercise</button>}
                </div>
              )}
            </div>
          )}

          {/* DASHBOARD TAB */}
          {view === 'dashboard' && (
            <div className="animate-fade-in space-y-6">
              <MoodChart history={journalHistory} />
              <GoalTracker habits={habits} onUpdate={handleHabitUpdate} onReset={handleHabitReset} />
              <WeeklySummary history={journalHistory} />
              <JournalHistory history={journalHistory} />
            </div>
          )}
        </div>
      </main>
    </>
  );
}

