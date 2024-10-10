// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuctwsVzO8lCFAqUl_8nWp1grhEsJE8IA",
  authDomain: "mynextjsproject-6ba1b.firebaseapp.com",
  projectId: "mynextjsproject-6ba1b",
  storageBucket: "mynextjsproject-6ba1b.appspot.com",
  messagingSenderId: "1027637234767",
  appId: "1:1027637234767:web:8b6249c877c3a4b3856e3a",
  measurementId: "G-15Y53KGG6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);