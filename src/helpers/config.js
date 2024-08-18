import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjPdWqRgG-LO9j3RhkTNOytr-Ftw7yljk",
  authDomain: "el-rincon-de-la-pocha.firebaseapp.com",
  projectId: "el-rincon-de-la-pocha",
  storageBucket: "el-rincon-de-la-pocha.appspot.com",
  messagingSenderId: "22466495095",
  appId: "1:22466495095:web:7f74ee6865eaec0969bc72",
  measurementId: "G-BVB6S2P6S4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
