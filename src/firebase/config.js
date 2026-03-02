import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuMLHWpvwNAKJgHLP9KfI9T1VAo2SzpUk",
  authDomain: "fitness-tracker-2c4ec.firebaseapp.com",
  projectId: "fitness-tracker-2c4ec",
  storageBucket: "fitness-tracker-2c4ec.firebasestorage.app",
  messagingSenderId: "960199432829",
  appId: "1:960199432829:web:1db8db208b1d0847af2f14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services so they can be used in other files
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;