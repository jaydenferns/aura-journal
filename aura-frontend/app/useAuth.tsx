'use client';

import { useState, useEffect } from 'react';
import { auth } from './firebaseConfig'; // Imports 'auth' from Step 1
import { onAuthStateChanged, User } from 'firebase/auth';

/**
 * A custom React hook to get the current authenticated user.
 * It provides the user object and a loading state.
 */
export default function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // Start as true

  useEffect(() => {
    // onAuthStateChanged is the official Firebase listener
    // It runs once on load, and again any time the user logs in or out.
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Set the user (or null)
      setLoading(false); // We're done loading
    });

    // This cleans up the listener when the component unmounts
    // to prevent memory leaks.
    return () => unsubscribe();
  }, []); // The empty array [] means this effect only runs once on component mount.

  // Return the user and loading state for other components to use
  return { user, loading };
}

