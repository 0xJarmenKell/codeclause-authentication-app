// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDLA8Mr_STDPQ_6gA0nXvgLU79e-HzBvlg",
  authDomain: "codeclause-auth.firebaseapp.com",
  projectId: "codeclause-auth",
  storageBucket: "codeclause-auth.appspot.com",
  messagingSenderId: "384921590703",
  appId: "1:384921590703:web:38d0d9aa49c135646f2d5a"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);







// export const auth = getAuth(app);
// import { getAuth } from "firebase/auth";
