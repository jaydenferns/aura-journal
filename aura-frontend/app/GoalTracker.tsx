'use client';

import { useState, useEffect } from 'react';

// Define the structure for a habit
interface Habit {
  id: string;
  name: string;
  target: number;
  progress: number;
  emoji: string;
}

// Initial state for our habits
const initialHabits: Habit[] = [
  { id: 'exercise', name: 'Exercise', target: 3, progress: 0, emoji: '💪' },
  { id: 'mindful', name: 'Mindful Minutes', target: 5, progress: 0, emoji: '🧘' },
  { id: 'hydrate', name: 'Hydrate (8 glasses)', target: 7, progress: 0, emoji: '💧' },
];

export default function GoalTracker() {
  const [habits, setHabits] = useState<Habit[]>([]);

  // On first load, get habits from localStorage or use initial state
  useEffect(() => {
    const savedHabits = localStorage.getItem('aura-habits');
    if (savedHabits) {
      setHabits(JSON.parse(savedHabits));
    } else {
      setHabits(initialHabits);
    }
  }, []);

  // Whenever habits change, save them to localStorage
  useEffect(() => {
    if (habits.length > 0) {
      localStorage.setItem('aura-habits', JSON.stringify(habits));
    }
  }, [habits]);

  const handleProgress = (id: string) => {
    setHabits(habits.map(habit => 
      (habit.id === id && habit.progress < habit.target)
        ? { ...habit, progress: habit.progress + 1 }
        : habit
    ));
  };
  
  const resetProgress = () => {
    setHabits(initialHabits);
  }

  return (
    <div className="my-8 bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">This Week's Goals</h2>
        <button onClick={resetProgress} className="text-sm text-blue-500 hover:underline">Reset</button>
      </div>
      <div className="space-y-4">
        {habits.map(habit => (
          <div key={habit.id}>
            <div className="flex justify-between items-center">
              <span className="font-semibold">{habit.emoji} {habit.name}</span>
              <span>{habit.progress} / {habit.target}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
              <div 
                className="bg-green-500 h-2.5 rounded-full" 
                style={{ width: `${(habit.progress / habit.target) * 100}%` }}
              ></div>
            </div>
            <button
              onClick={() => handleProgress(habit.id)}
              className="mt-2 text-sm bg-gray-200 px-3 py-1 rounded-full hover:bg-gray-300"
            >
              Log +1
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}