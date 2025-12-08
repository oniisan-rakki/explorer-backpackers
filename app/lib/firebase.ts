// app/lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// 🚨 Use these newly generated keys 🚨
const firebaseConfig = {
  apiKey: "AIzaSyCaGimFzi3ElDtBuxbnvmhHBWY9LkafkgU",
  authDomain: "explorer-backpackers.firebaseapp.com",
  projectId: "explorer-backpackers",
  storageBucket: "explorer-backpackers.firebasestorage.app",
  messagingSenderId: "703947792476",
  appId: "1:703947792476:web:e2c85e0303c0cd5aa10699",
  measurementId: "G-KK4649R11W"
};

// 1. Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// 2. Initialize Firestore (The database for your bookings)
const db = getFirestore(app);

// 3. Initialize Analytics (Runs only in browser)
if (typeof window !== "undefined") {
  isSupported().then((yes) => yes && getAnalytics(app));
}

export { db };