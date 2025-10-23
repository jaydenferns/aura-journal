import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Do NOT import getAnalytics, as it requires the 'window' object

// --- PASTE YOUR FIREBASE CONFIG KEYS HERE ---
// You can get this from your Firebase project settings:
// Project Overview > Project settings > General > "Your apps" > Web app
const firebaseConfig = {
  apiKey: "AIzaSyBT0A7ywivkgVFtWLkbpESNZWw8l8TXa4U",
  authDomain: "aura-journal-b37c4.firebaseapp.com",
  projectId: "aura-journal-b37c4",
  storageBucket: "aura-journal-b37c4.firebasestorage.app",
  messagingSenderId: "999309219347",
  appId: "1:999309219347:web:3424ddafdb70ca381591e6"
};




// Initialize Firebase
// This line checks if the app is already initialized,
// which is important for Next.js to avoid errors during hot-reloading.
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Get the database and auth instances
const db = getFirestore(app);
const auth = getAuth(app);

// Export the instances so other files can use them
export { app, db, auth };






