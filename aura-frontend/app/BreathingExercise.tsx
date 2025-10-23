'use client';

import { useState, useEffect } from 'react';

// Define the props the component will accept
interface BreathingExerciseProps {
  onClose: () => void;
}

// Define the different phases of the exercise
const phases = [
  { name: "Inhale", duration: 4 },
  { name: "Hold", duration: 7 },
  { name: "Exhale", duration: 8 },
];
const totalCycles = 4; // The exercise will run 4 full times

export default function BreathingExercise({ onClose }: BreathingExerciseProps) {
  // --- State Variables ---
  // cycleIndex tracks which phase we're in (e.g., 0 = Inhale, 1 = Hold, 2 = Exhale)
  const [cycleIndex, setCycleIndex] = useState(-1); // Start at -1 for "Get Ready"
  // instruction holds the text to display (e.g., "Inhale")
  const [instruction, setInstruction] = useState("Get Ready");
  // countdown holds the number of seconds remaining for the current phase
  const [countdown, setCountdown] = useState(3); // Start with a 3-second "Get Ready" timer

  useEffect(() => {
    // This interval runs every 1 second to update the countdown
    const interval = setInterval(() => {
      setCountdown(c => c - 1); // Decrement the countdown by 1
    }, 1000);

    // This checks if the countdown for the current phase has finished
    if (countdown === 0) {
      const nextCycleIndex = cycleIndex + 1;

      // Check if we have completed all 12 phases (3 phases * 4 cycles)
      if (nextCycleIndex >= phases.length * totalCycles) {
        clearInterval(interval); // Stop the timer
        onClose(); // Close the modal
        return;
      }

      // Get the next phase from our `phases` array
      // (e.g., cycle 3 % 3 = 0, so it loops back to "Inhale")
      const nextPhase = phases[nextCycleIndex % phases.length];

      setCycleIndex(nextCycleIndex); // Move to the next cycle
      setInstruction(nextPhase.name); // Set the new instruction
      setCountdown(nextPhase.duration); // Set the countdown for the new phase
    }

    // This is a cleanup function. It stops the interval when the component is unmounted.
    return () => clearInterval(interval);

  }, [countdown, cycleIndex, onClose]); // This effect re-runs every time the countdown or cycle changes

  return (
    <div className="fixed inset-0 bg-blue-900 bg-opacity-90 flex flex-col items-center justify-center z-50 animate-fade-in">
      <div className="text-center">
        <div className="w-64 h-64 rounded-full border-4 border-white flex items-center justify-center">
          {/* Display both the instruction and the live countdown */}
          <div>
            <p className="text-white text-4xl font-bold">{instruction}</p>
            <p className="text-white text-8xl font-bold mt-2">{countdown}</p>
          </div>
        </div>
      </div>
      <button 
        onClick={onClose} 
        className="absolute top-4 right-6 text-white text-3xl font-bold opacity-70 hover:opacity-100"
      >
        &times;
      </button>
    </div>
  );
}

