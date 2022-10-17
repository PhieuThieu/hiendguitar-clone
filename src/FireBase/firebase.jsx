import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getDatabase} from 'firebase/database'

const firebaseConfig = {
  piKey: "AIzaSyCBpBmpRpiZTC7nF5tzpPdLdJBgajWDLV4",
  authDomain: "hiend-a4c15.firebaseapp.com",
  databaseURL: "https://hiend-a4c15-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hiend-a4c15",
  storageBucket: "hiend-a4c15.appspot.com",
  messagingSenderId: "21030520024",
  appId: "1:21030520024:web:8df67020565ae3379f83ad",
  measurementId: "G-9N1FMNNKNW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const database = getDatabase(app);
