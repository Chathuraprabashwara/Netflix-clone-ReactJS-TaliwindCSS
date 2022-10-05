// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmVlfkgLRfGFG8J2lI_T5i_o9LVqjZC_w",
  authDomain: "netflix-react-clone-a475f.firebaseapp.com",
  projectId: "netflix-react-clone-a475f",
  storageBucket: "netflix-react-clone-a475f.appspot.com",
  messagingSenderId: "299146314501",
  appId: "1:299146314501:web:ef100e51650a5d1a2b6d6c",
  measurementId: "G-75CLZR5177"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


