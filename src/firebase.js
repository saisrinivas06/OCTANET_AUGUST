// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDE4liS3dZcOA5K23fGqNZJcX_5Qdm1y8",
  authDomain: "todo-app-e2525.firebaseapp.com",
  projectId: "todo-app-e2525",
  storageBucket: "todo-app-e2525.appspot.com",
  messagingSenderId: "724455981451",
  appId: "1:724455981451:web:9a1fc09199070315842f8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)