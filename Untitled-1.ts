// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqnKpgfBPrdwoCZXWwoS0KOZJIIDZv3p8",
  authDomain: "urbancecloth.firebaseapp.com",
  projectId: "urbancecloth",
  storageBucket: "urbancecloth.firebasestorage.app",
  messagingSenderId: "344659353300",
  appId: "1:344659353300:web:d0673f1dd046b3d5bda541",
  measurementId: "G-EWWXPT0S0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);