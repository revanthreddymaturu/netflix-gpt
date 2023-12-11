// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfN99ooztuWOFzr0gW4564iNBVxYxQXWE",
  authDomain: "netflix-gpt-2dbb7.firebaseapp.com",
  projectId: "netflix-gpt-2dbb7",
  storageBucket: "netflix-gpt-2dbb7.appspot.com",
  messagingSenderId: "946358336924",
  appId: "1:946358336924:web:3a6766cb9d8979a4689c59",
  measurementId: "G-CR523SXJCM"
};

// Initialize Firebase
initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth();