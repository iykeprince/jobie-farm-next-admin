// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration

// Initialize Cloud Firestore and get a reference to the service
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:
    process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY ??
    "AIzaSyC_anNIk3aPsyNhPQM_fLqQ1yoEKjlSGk0",
  authDomain:
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ??
    "jobie-farm.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "jobie-farm",
  storageBucket: "jobie-farm.appspot.com",
  messagingSenderId: "937897298518",
  appId: "1:937897298518:web:38f7d3b50703ca8d3d89f7",
  measurementId: "G-MKYV4L1C9W",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
if (typeof window !== "undefined") {
  // browser code
  const analytics = getAnalytics(app);
}
export const db = getFirestore(app);
export const auth = getAuth(app);
