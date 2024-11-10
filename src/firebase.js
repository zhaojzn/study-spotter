// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLGhjYGNOUU2UXxfxbsQhCH_GPnTxbhcs",
  authDomain: "studyspotter-b18ee.firebaseapp.com",
  projectId: "studyspotter-b18ee",
  storageBucket: "studyspotter-b18ee.firebasestorage.app",
  messagingSenderId: "281971316184",
  appId: "1:281971316184:web:bfc3d88c50fa4fddddcead",
  measurementId: "G-SZ77BNCELN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

