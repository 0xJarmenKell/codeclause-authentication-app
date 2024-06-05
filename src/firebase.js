// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YourAPI",
  authDomain: "codeclause-auth.firebaseapp.com",
  projectId: "codeclause-auth",
  storageBucket: "codeclause-auth.appspot.com",
  messagingSenderId: "384921590703",
  appId: "YourID"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);







// export const auth = getAuth(app);
// import { getAuth } from "firebase/auth";
