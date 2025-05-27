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
  const menuCollection = collection(db, "menu");
  const snapshot = await getDocs(menuCollection);

  const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  console.log(data);
  return data;
};

// Завантаження всіх коментарів з Firestore
export const loadComments = async (setComments, setLoading) => {
  const snapshot = await getDocs(collection(db, 'comments'));
  const commentsData = snapshot.docs.map(doc => doc.data());
  setComments(commentsData);
  setLoading(false);
};

export const createComment = async (newComment) => {
  addDoc(collection(db, 'comments'), newComment);
};

// Дані меню
const menuItems = [
  {
    id: 1,
    name: 'Classic Tonkotsu Ramen',
    price: 260,
    weight: ['300 ml', '150 g', '80 g', '1/2 pc', '3 pc'],
    ingredients: [
      'Tonkotsu broth (pork-based)',
      'Wheat noodles',
      'Chashu (pork belly)',
      'Boiled marinated egg',
      'Narutomaki (fish cake)',
      'Green onions',
      'Bamboo shoots',
      'Sesame seeds',
    ],
    className: 'tonkotsu',
  },
  {
    id: 2,
    name: 'Vegan Miso Ramen',
    price: 230,
    weight: ['300 ml', '150 g', '1/2 pc', '3 pc'],
    ingredients: [
      'Vegetable miso broth',
      'Wheat noodles',
      'Mushrooms (champignons)',
      'Nori seaweed',
      'Sesame seeds',
      'Green onions',
      'Bamboo shoots',
    ],
    className: 'miso',
  },
  {
    id: 3,
    name: 'Spicy Shoyu Ramen',
    price: 280,
    weight: ['300 ml', '150 g', '80 g', '1 pc', '2 pc'],
    ingredients: [
      'Shoyu broth (soy-based)',
      'Wheat noodles',
      'Spicy chili oil',
      'Chashu (pork belly)',
      'Boiled egg',
      'Green onions',
      'Bamboo shoots',
    ],
    className: 'shoyu',
  }
];

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
