'use client';

import { useState, useEffect } from 'react';
import { Timestamp } from 'firebase/firestore'; // <-- FIX 1: Import Timestamp

// --- Type Definitions ---
export interface JournalEntry {
  id: string;
  date: Timestamp; // <-- FIX 2: The date is a Firestore Timestamp
  sentiment: 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL' | string;
  labels: string[];
  activities: string[];
  [key: string]: any;
}

interface SummaryData {
  totalEntries: number;
  moods: { [key: string]: number };
  topEmotion: string;
  topActivity: string;
}

export default function WeeklySummary({ history }: { history: JournalEntry[] }) {
  const [showModal, setShowModal] = useState(false);
  const [summary, setSummary] = useState<SummaryData | null>(null);

  // --- FIX 3: Run calculation inside useEffect, triggered by 'history' ---
  useEffect(() => {
    // This function now runs whenever the 'history' prop changes
    const calculateSummary = () => {
      if (typeof window === 'undefined') return;
      
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

      // Filter for recent entries
      const recentEntries = history.filter(entry => {
        // --- FIX 4: Use .toDate() for date comparison ---
        if (entry.date && typeof entry.date.toDate === 'function') {
          return entry.date.toDate() > sevenDaysAgo;
        }
        return false;
      });

      if (recentEntries.length === 0) {
        setSummary({ totalEntries: 0, moods: {}, topEmotion: 'N/A', topActivity: 'N/A' });
        return;
      }

      // --- All the calculation logic is now safe ---
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

    // Call the calculation
    calculateSummary();

  }, [history]); // <-- This dependency array ensures the code re-runs

  
  const handleShowSummary = () => {
    // We no longer need to calculate here, just show the modal.
    // The useEffect hook has already built the 'summary' object.
    setShowModal(true);
  };

  const MoodStat = ({ mood, count, total }: { mood: string, count: number, total: number }) => {
    const percentage = total > 0 ? Math.round((count / total) * 100) : 0;
    const colors: { [key:string]: string } = {
      POSITIVE: 'bg-green-500',
      NEGATIVE: 'bg-rose-500',
      NEUTRAL: 'bg-slate-500',
    };
    return (
      <div>
        <div className="flex justify-between font-semibold text-sm">
          <span>{mood.charAt(0).toUpperCase() + mood.slice(1).toLowerCase()}</span>
          <span>{percentage}%</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2.5 mt-1">
          <div className={`${colors[mood] || 'bg-gray-400'} h-2.5 rounded-full`} style={{ width: `${percentage}%` }}></div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Your Week</h2>
        <p className="text-slate-600 mb-4">Get a summary of your emotional trends and insights from the past 7 days.</p>
        <button
          onClick={handleShowSummary}
          className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-indigo-700 transition-all"
        >
          Generate My Weekly Summary
        </button>
      </div>

      {showModal && summary && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-lg shadow-2xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <h2 className="text-2xl font-bold text-slate-800">Your Week in Review</h2>
              <button onClick={() => setShowModal(false)} className="text-2xl font-bold text-slate-500 hover:text-slate-800">&times;</button>
            </div>
            
            {summary.totalEntries > 0 ? (
              <div className="space-y-5">
                <div>
                  <h3 className="font-bold text-lg mb-2">Mood Breakdown</h3>
                  <div className="space-y-3">
                    <MoodStat mood="POSITIVE" count={summary.moods.POSITIVE} total={summary.totalEntries} />
                    <MoodStat mood="NEGATIVE" count={summary.moods.NEGATIVE} total={summary.totalEntries} />
                    <MoodStat mood="NEUTRAL" count={summary.moods.NEUTRAL} total={summary.totalEntries} />
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg">Key Insights</h3>
                  <div className="mt-2 space-y-2 text-slate-700">
                    <p><strong>Your most common feeling was:</strong> <span className="font-semibold text-indigo-700">{summary.topEmotion}</span></p>
                    <p><strong>Activity most linked to positive days:</strong> <span className="font-semibold text-green-700">{summary.topActivity}</span></p>
                  </div>
                </div>
                
                <div className="bg-indigo-50 p-3 rounded-lg border border-indigo-200">
                  <p className="text-indigo-800"><strong>Pro-Tip:</strong> To boost your mood next week, try focusing on activities like **{summary.topActivity}**!</p>
                </div>
              </div>
            ) : (
              <p className="text-center text-slate-600 py-8">Not enough data from the past week. Keep journaling to unlock your summary!</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

