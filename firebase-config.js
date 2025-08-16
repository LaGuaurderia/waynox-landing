// Firebase configuration for WAYNOX Landing Page
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

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

// Initialize Firestore
const db = getFirestore(app);

// Initialize Analytics (opcional)
const analytics = getAnalytics(app);

// Export for use in other files
export { db, collection, addDoc, serverTimestamp };
