import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAG6LW6aPs5YSDL5z6hhWNsrSw-TBQ6JhA",
  authDomain: "gameplay-9ded6.firebaseapp.com",
  databaseURL: "https://gameplay-9ded6-default-rtdb.firebaseio.com",
  projectId: "gameplay-9ded6",
  storageBucket: "gameplay-9ded6.firebasestorage.app",
  messagingSenderId: "202153465985",
  appId: "1:202153465985:web:fa691092cb297050b11580"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);