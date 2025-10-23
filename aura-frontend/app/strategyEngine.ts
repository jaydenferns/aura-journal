'use client';

// --- Type Definitions ---
// This defines the analysis object that the engine will receive
interface AnalysisResult {
  labels: string[];
  activities: string[];
  sentiment: 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL' | string;
}

// This defines the structure of a single strategy
export interface Strategy {
  title: string;
  text: string;
  emoji: string;
  requiredTags: string[];
}

// Our library of coping strategies.
// More specific strategies (with more required tags) will be prioritized.
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

// The "engine" function that finds the best strategy
export function getPersonalizedStrategy(analysis: AnalysisResult): Strategy {
  let bestMatch: Strategy | null = null;
  let highestScore = 0;

  // Combine the AI labels and user-logged activities into one list
  const allUserTags = [...analysis.labels, ...analysis.activities];

  // Loop through every strategy in our library
  for (const strategy of strategyLibrary) {
    // Calculate how many of the required tags the user has
    const score = strategy.requiredTags.reduce((acc, tag) => {
      // If the user's tags include this required tag, add 1 to the score
      return allUserTags.includes(tag) ? acc + 1 : acc;
    }, 0);

    // If this strategy has a higher score (is a better match) than the
    // current best, replace it. This prioritizes more specific advice.
    if (score > highestScore) {
      highestScore = score;
      bestMatch = strategy;
    }
  }

  // If no specific strategy was found (score 0), return a default one
  return bestMatch || {
    title: "Your Daily Insight ✨",
    text: "Reflecting on your feelings is a powerful step. Notice the patterns in your thoughts and activities.",
    emoji: "🧠",
    requiredTags: [],
  };
}