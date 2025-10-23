'use client';

import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Timestamp } from 'firebase/firestore'; // Import the Timestamp type

// Register the components Chart.js needs
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Define the structure of our historical entries
export interface JournalEntry {
  id: string;
  date: Timestamp; // <-- FIX 1: The date is a Firestore Timestamp object
  sentiment: 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL' | string;
  [key: string]: any; 
}

export default function MoodChart({ history }: { history: JournalEntry[] }) {
  const [chartData, setChartData] = useState<any>({ datasets: [] });
  const [hasEnoughData, setHasEnoughData] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    // Filter for recent entries
    const recentEntries = history.filter(entry => {
      // --- FIX 2: Check if date exists and has the .toDate() method ---
      if (entry.date && typeof entry.date.toDate === 'function') {
        const entryDate = entry.date.toDate(); // This is the correct conversion!
        return entryDate >= sevenDaysAgo;
      }
      return false; // Filter out any invalid entries
    });

    if (recentEntries.length < 2) {
      setHasEnoughData(false);
      return;
    } 

    setHasEnoughData(true);
    
    // --- FIX 3: Use .toDate() for sorting ---
    const sortedEntries = recentEntries.sort((a, b) => a.date.toDate().getTime() - b.date.toDate().getTime());

    // --- FIX 4: Use .toDate() for chart labels ---
    const labels = sortedEntries.map(entry => entry.date.toDate().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
    const dataPoints = sortedEntries.map(entry => {
      if (entry.sentiment === 'POSITIVE') return 1;
      if (entry.sentiment === 'NEGATIVE') return -1;
      return 0; // NEUTRAL
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
  }, [history]); // This correctly re-runs when history changes

  // This is the content to show when the chart is loading or has no data
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

  // Chart.js options
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
      x: {
        grid: {
          display: false, 
        }
      }
    },
  };

  // This is the content when the chart *does* have data
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <Line options={chartOptions} data={chartData} />
    </div>
  );
}

