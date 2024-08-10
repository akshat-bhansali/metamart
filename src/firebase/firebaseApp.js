// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCIb-dk7bmqjXuRVrA97yD1_VxjxxxpsXY",
  authDomain: "sparkathon-a1cfb.firebaseapp.com",
  projectId: "sparkathon-a1cfb",
  storageBucket: "sparkathon-a1cfb.appspot.com",
  messagingSenderId: "136684544716",
  appId: "1:136684544716:web:bb087b5c6cd265c80f9869",
  measurementId: "G-NKN3C9RK6T",
};

// Initialize Firebase
let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
