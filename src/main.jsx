import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCecDlYWjVH7dnxCSqoBRJi9cHI1KWQEm4",
  authDomain: "adopciones-a4a6a.firebaseapp.com",
  projectId: "adopciones-a4a6a",
  storageBucket: "adopciones-a4a6a.appspot.com",
  messagingSenderId: "65602855349",
  appId: "1:65602855349:web:38f77405b5e00c9803f9fc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
