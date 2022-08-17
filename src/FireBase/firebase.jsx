import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getDatabase} from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDHn2_J1vff4ogGIwLpQVvqoEKRGboIPHA",
  authDomain: "hiendguitar-clone.firebaseapp.com",
  projectId: "hiendguitar-clone",
  storageBucket: "hiendguitar-clone.appspot.com",
  messagingSenderId: "169174120351",
  appId: "1:169174120351:web:e7b87cba4d6e172fc5efaa",
  measurementId: "G-91DXY7HH73",
  databaseURL: "https://hiendguitar-clone-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const database = getDatabase(app);