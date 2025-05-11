import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAunEmiy5Ma8-NJPTP9-2fEHDnsgHCK3qE",
    authDomain: "training-tailwind.firebaseapp.com",
    projectId: "training-tailwind",
    storageBucket: "training-tailwind.firebasestorage.app",
    messagingSenderId: "740806903615",
    appId: "1:740806903615:web:d39ac5517305c2cea0f58a",
    measurementId: "G-ZF4X66GEJ7"
};


// Initialiser Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
