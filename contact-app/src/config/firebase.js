// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZw6kg4gF2Rs8FTyzgukWjBxa8fw2-_gE",
  authDomain: "vite-contact-73c45.firebaseapp.com",
  projectId: "vite-contact-73c45",
  storageBucket: "vite-contact-73c45.appspot.com",
  messagingSenderId: "446933245486",
  appId: "1:446933245486:web:3b9a73906c070bf8e289bf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);