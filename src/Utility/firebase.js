import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiDXlHVi9geV8aTz9HP1gM_bdPjr02y1Q",
  authDomain: "project-d57e5.firebaseapp.com",
  projectId: "project-d57e5",
  storageBucket: "project-d57e5.firebasestorage.app",
  messagingSenderId: "952365393174",
  appId: "1:952365393174:web:a32615cbf3292155101c37"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

