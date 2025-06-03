import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { collection, getDocs, setDoc, doc, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyClSGWysRfBpRhJcWUUs7S4XTh9dFs5w5A",
//   authDomain: "login-auth-ec286.firebaseapp.com",
//   projectId: "login-auth-ec286",
//   storageBucket: "login-auth-ec286.firebasestorage.app",
//   messagingSenderId: "36581411017",
//   appId: "1:36581411017:web:ed5c37bd59a7de16ff6518"
// };

const firebaseConfig = {
  apiKey: "AIzaSyCBWxSh0IxEA_6AWncsiME-fU0v2wTfp88",
  authDomain: "tonkotsu-tales.firebaseapp.com",
  projectId: "tonkotsu-tales",
  storageBucket: "tonkotsu-tales.firebasestorage.app",
  messagingSenderId: "501202065209",
  appId: "1:501202065209:web:d5ae97255976cbf07d7ae8",
  measurementId: "G-2GER19G7G8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);


// Отримання документів з колекції menu
export const fetchMenu = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/menu");
    if (!response.ok) {
      throw new Error("Failed to fetch menu");
    }
    const menu = await response.json();
    console.log("All menu:", menu);
    return menu;
  } catch (error) {
    console.error("Error fetching menu:", error);
    return null;
  }
};

// Завантаження всіх коментарів з Firestore
export const loadComments = async (setComments, setLoading) => {
  const commentsData = await GetComments();
  setComments(commentsData);
  setLoading(false);
};

async function GetComments() {
  try {
    const response = await fetch("http://localhost:5000/api/comments");
    if (!response.ok) {
      throw new Error("Failed to fetch initiatives");
    }
    const comments = await response.json();
    console.log("All comments:", comments);
    return comments;
  } catch (error) {
    console.error("Error fetching comments:", error);
    return null;
  }
}

// Додавання нового коментаря до Firestore
export const createComment = async (newComment) => {
  try {
    const response = await fetch("http://localhost:5000/api/add_comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newComment)
    });

    const result = await response.json();
    if (response.ok) {
      console.log("Comment created with ID:", result.id);
      return result.id;
    } else {
      throw new Error(result.error || "Unknown error");
    }
  } catch (error) {
    console.error("Error adding comment:", error.message);
    return null;
  }
};
