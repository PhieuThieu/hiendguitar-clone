import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getDatabase} from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDfPwetNn7VwvV7JxPQcutOkboLPzRMh8E",
  authDomain: "hiend-guitar-clone.firebaseapp.com",
  projectId: "hiend-guitar-clone",
  storageBucket: "hiend-guitar-clone.appspot.com",
  messagingSenderId: "191431414504",
  appId: "1:191431414504:web:a507387c5ca5fc56492f5d",
  measurementId: "G-Y8NN7ML841"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const database = getDatabase(app);
