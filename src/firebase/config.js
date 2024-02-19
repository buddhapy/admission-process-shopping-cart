// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFRVAyGqzOi50XkQf1JdHYZdW8eGK5XhM",
  authDomain: "shop-react-85430.firebaseapp.com",
  projectId: "shop-react-85430",
  storageBucket: "shop-react-85430.appspot.com",
  messagingSenderId: "953580120310",
  appId: "1:953580120310:web:8e3216953065a36c3b64d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);