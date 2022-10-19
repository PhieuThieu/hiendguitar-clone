import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getDatabase} from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyBq9BaOE1AgWHw0Jw_WQ_XgmVMOTMh_7H4",
  authDomain: "hiend-guitar.firebaseapp.com",
  databaseURL: "https://hiend-guitar-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hiend-guitar",
  storageBucket: "hiend-guitar.appspot.com",
  messagingSenderId: "1024118690872",
  appId: "1:1024118690872:web:6ba6117e057159452f02cd",
  measurementId: "G-R3D3S9RF60"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const database = getDatabase(app);
