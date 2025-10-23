'use client';

import { auth } from './firebaseConfig';
import { GoogleAuthProvider, signInWithPopup, signInAnonymously } from 'firebase/auth';
import { Sparkles } from 'lucide-react';

export default function LoginScreen() {
  
  // Triggers the Google Sign-in popup
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

  // Signs the user in as a guest
  const handleGuestLogin = async () => {
    try {
      await signInAnonymously(auth);
    } catch (error) {
      console.error("Error during guest login:", error);
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
            className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-sm flex items-center justify-center"
          >
            <Sparkles size={20} className="mr-2" />
            Sign in with Google
          </button>
          
          <button
            onClick={handleGuestLogin}
            className="w-full bg-slate-200 text-slate-700 font-bold py-3 px-4 rounded-lg hover:bg-slate-300 transition-all duration-300 mt-4"
          >
            Continue as Guest
          </button>
        </div>
      </div>
    </div>
  );
}

