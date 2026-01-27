// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC36hbsLbeu0HO8iQoZquBxHw96G8LgDGc",
  authDomain: "quiz-app-56f7c.firebaseapp.com",
  projectId: "quiz-app-56f7c",
  storageBucket: "quiz-app-56f7c.firebasestorage.app",
  messagingSenderId: "704982394194",
  appId: "1:704982394194:web:e978d4ee26acb4d608468b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);