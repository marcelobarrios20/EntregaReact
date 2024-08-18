// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjPdWqRgG-LO9j3RhkTNOytr-Ftw7yljk",
  authDomain: "el-rincon-de-la-pocha.firebaseapp.com",
  projectId: "el-rincon-de-la-pocha",
  storageBucket: "el-rincon-de-la-pocha.appspot.com",
  messagingSenderId: "22466495095",
  appId: "1:22466495095:web:7f74ee6865eaec0969bc72",
  measurementId: "G-BVB6S2P6S4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);