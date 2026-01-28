// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration (API key from .env)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "quiz-app-56f7c.firebaseapp.com",
  projectId: "quiz-app-56f7c",
  storageBucket: "quiz-app-56f7c.firebasestorage.app",
  messagingSenderId: "704982394194",
  appId: "1:704982394194:web:e978d4ee26acb4d608468b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
