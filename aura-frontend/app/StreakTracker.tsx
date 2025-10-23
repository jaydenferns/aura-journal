'use client';

// This component receives the current streak count as a prop and displays it.
interface StreakTrackerProps {
  streak: number;
}

export default function StreakTracker({ streak }: StreakTrackerProps) {
  // We use `key={streak}` in page.tsx to force a re-render with a small animation
  return (
    <div className="flex items-center gap-1 animate-pop-in">
      <span className="text-2xl" role="img" aria-label="Streak flame">🔥</span>
      <span className="text-xl font-bold text-orange-500">{streak}</span>
    </div>
  );
}
