// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC5YR4wI-CLJuYz3tlpbF1INNgyy58Tc8",
  authDomain: "chat-com-react.firebaseapp.com",
  projectId: "chat-com-react",
  storageBucket: "chat-com-react.appspot.com",
  messagingSenderId: "382430672268",
  appId: "1:382430672268:web:80246977ebcbd4e40792a9",
  measurementId: "G-2VWWGHM6GR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const databaseApp = getFirestore(app)