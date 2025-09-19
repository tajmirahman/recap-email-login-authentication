// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgxNcTzY0OEkpoSMoARyGNFA-gJX3sahc",
  authDomain: "new-email-login.firebaseapp.com",
  projectId: "new-email-login",
  storageBucket: "new-email-login.firebasestorage.app",
  messagingSenderId: "915339542950",
  appId: "1:915339542950:web:cfa59dc00bac42768dcf67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;