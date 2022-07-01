import { initializeApp } from "firebase/app";
import { getPerformance } from "firebase/performance";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC8tkep0Sm5fUKl_TWPs-YGQ4f0IaL4474",
  authDomain: "cybersecurity-skill-points.firebaseapp.com",
  projectId: "cybersecurity-skill-points",
  storageBucket: "cybersecurity-skill-points.appspot.com",
  messagingSenderId: "391463925982",
  appId: "1:391463925982:web:d4d3b9240bc9cbc71bea4f",
  measurementId: "G-Q54DPJ9KN7",
};

// Initialize Firebase
initializeApp(firebaseConfig);
getPerformance();
getAnalytics();
