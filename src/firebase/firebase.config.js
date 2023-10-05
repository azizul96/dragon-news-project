// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxB6zYC-FYSWehM5UIOE3PhBMzCvOQb0c",
  authDomain: "dragon-news-project-c67be.firebaseapp.com",
  projectId: "dragon-news-project-c67be",
  storageBucket: "dragon-news-project-c67be.appspot.com",
  messagingSenderId: "571377373039",
  appId: "1:571377373039:web:c016a13377c4aaad78a29a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;