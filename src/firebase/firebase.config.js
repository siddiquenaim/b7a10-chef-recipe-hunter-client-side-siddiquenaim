// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNrwLoLZqKrfY5rrqpWWe3SGVLXg1u0bw",
  authDomain: "b7a10-chef-recipe-hunter-56cec.firebaseapp.com",
  projectId: "b7a10-chef-recipe-hunter-56cec",
  storageBucket: "b7a10-chef-recipe-hunter-56cec.appspot.com",
  messagingSenderId: "347642977666",
  appId: "1:347642977666:web:d32ab5f90224e73c88839b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
