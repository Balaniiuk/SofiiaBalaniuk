import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { collection, getDocs, setDoc, doc, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClSGWysRfBpRhJcWUUs7S4XTh9dFs5w5A",
  authDomain: "login-auth-ec286.firebaseapp.com",
  projectId: "login-auth-ec286",
  storageBucket: "login-auth-ec286.firebasestorage.app",
  messagingSenderId: "36581411017",
  appId: "1:36581411017:web:ed5c37bd59a7de16ff6518"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);


// menu
export const fetchMenu = async () => {
  const menuCollection = collection(db, "menu");
  const snapshot = await getDocs(menuCollection);

  const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  console.log(data);
  return data;
};

// Завантаження коментарів 
export const loadComments = async (setComments, setLoading) => {
  const snapshot = await getDocs(collection(db, 'comments'));
  const commentsData = snapshot.docs.map(doc => doc.data());
  setComments(commentsData);
  setLoading(false);
};

export const createComment = async (newComment) => {
  addDoc(collection(db, 'comments'), newComment);
};

// Функція запису в Firestore
export async function uploadMenu() {
  try {
    const menuCollection = collection(db, 'menu');

    for (const item of menuItems) {
      await setDoc(doc(menuCollection, item.id.toString()), item);
    }

    console.log("✅ Menu uploaded successfully!");
  } catch (error) {
    console.error("❌ Error uploading menu:", error);
  }
}
