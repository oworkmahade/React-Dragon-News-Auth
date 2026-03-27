// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB4cbkw5sWu4Qwb6x51zK2XoyeVlgf0Xg",
  authDomain: "react-dragon-news-auth-b07e2.firebaseapp.com",
  projectId: "react-dragon-news-auth-b07e2",
  storageBucket: "react-dragon-news-auth-b07e2.firebasestorage.app",
  messagingSenderId: "438627745139",
  appId: "1:438627745139:web:251e403a822fad7dd3d906",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
