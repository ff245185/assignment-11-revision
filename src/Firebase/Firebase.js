// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSK1MGmB6XwPcSqgIDp4kegQjg_5PVWSo",
  authDomain: "dog-traning.firebaseapp.com",
  projectId: "dog-traning",
  storageBucket: "dog-traning.appspot.com",
  messagingSenderId: "350847925141",
  appId: "1:350847925141:web:757a6804ce9efcd548949c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;