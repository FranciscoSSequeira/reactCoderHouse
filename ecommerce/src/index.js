import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAG6LW6aPs5YSDL5z6hhWNsrSw-TBQ6JhA",
  authDomain: "gameplay-9ded6.firebaseapp.com",
  projectId: "gameplay-9ded6",
  storageBucket: "gameplay-9ded6.firebasestorage.app",
  messagingSenderId: "202153465985",
  appId: "1:202153465985:web:fa691092cb297050b11580"
};


initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


