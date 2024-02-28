// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBqOnkBvNW0ojlEc-vikc8YSEipoGVv-Ww",
  authDomain: "real-estate-d2296.firebaseapp.com",
  projectId: "real-estate-d2296",
  storageBucket: "real-estate-d2296.appspot.com",
  messagingSenderId: "708188052262",
  appId: "1:708188052262:web:c40b4d99796647dd07ffe7",
  measurementId: "G-1B258VR44Z",
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
