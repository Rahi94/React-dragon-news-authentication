// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTrnnAl7mCHbdmDiAisvTc3AgeVslnZ5c",
  authDomain: "fir-dragon-news-authentic.firebaseapp.com",
  projectId: "fir-dragon-news-authentic",
  storageBucket: "fir-dragon-news-authentic.appspot.com",
  messagingSenderId: "340948568300",
  appId: "1:340948568300:web:937c321b5ca9c84636fdc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;