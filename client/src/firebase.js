// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "aiwebsitebuilder-db6f4.firebaseapp.com",
  projectId: "aiwebsitebuilder-db6f4",
  storageBucket: "aiwebsitebuilder-db6f4.firebasestorage.app",
  messagingSenderId: "339120431779",
  appId: "1:339120431779:web:dad7abc77257e00ff05516"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}
