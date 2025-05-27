import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/getFirestore";

const firebaseConfig = {
  apiKey: "AIzaSyClSGWysRfBpRhJcWUUs7S4XTh9dFs5w5A",
  authDomain: "login-auth-ec286.firebaseapp.com",
  projectId: "login-auth-ec286",
  storageBucket: "login-auth-ec286.firebasestorage.app",
  messagingSenderId: "36581411017",
  appId: "1:36581411017:web:ed5c37bd59a7de16ff6518"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);