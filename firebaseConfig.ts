// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD76BHWFTCYx5mBqcMNWrk7n9p0bQck5MI",
  authDomain: "real-estate-e65a2.firebaseapp.com",
  projectId: "real-estate-e65a2",
  storageBucket: "real-estate-e65a2.appspot.com",
  messagingSenderId: "805316792170",
  appId: "1:805316792170:web:b0db76264325e05a101f13",
  measurementId: "G-XHV9BP87XX",
};


export const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
