import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getDatabase} from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyB1lcZWHO_NShVXgpk37ser2vl5sUpfhqQ",
  authDomain: "hiendguitar-68be4.firebaseapp.com",
  databaseURL: "https://hiendguitar-68be4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hiendguitar-68be4",
  storageBucket: "hiendguitar-68be4.appspot.com",
  messagingSenderId: "395265263098",
  appId: "1:395265263098:web:40a07d36de656bcd0fd043",
  measurementId: "G-BF1CVVC438"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const database = getDatabase(app);
