// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
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
//const analytics = getAnalytics(app);
export const auth = getAuth(app);

// REACT_APP_FIREBASE_API_KEY=AIzaSyAmVlfkgLRfGFG8J2lI_T5i_o9LVqjZC_w
// REACT_APP_FIREBASE_AUTH_DOMAIN=netflix-react-clone-a475f.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=netflix-react-clone-a475f
// REACT_APP_FIREBASE_STORAGE_BUCKET=netflix-react-clone-a475f.appspot.com
// REACT_APP_MESSAGING_SENDER=299146314501
// REACT_APP_APP_ID=1:299146314501:web:ef100e51650a5d1a2b6d6c
