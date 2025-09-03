// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOhuc2PzCJZLQcCQNGhvvfSmyYsWA5ZIs",
  authDomain: "waynox-landing.firebaseapp.com",
  projectId: "waynox-landing",
  storageBucket: "waynox-landing.firebasestorage.app",
  messagingSenderId: "690250278678",
  appId: "1:690250278678:web:c5525cac4ef760201a9237",
  measurementId: "G-H58F4YT14P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);

// Initialize Analytics (only in browser)
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export default app;
