// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//! İMPORT Edilecek
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjcyWqdKvz8gT9TSWvuHab_DO0e34G4EM",
  authDomain: "hs-chat-app-f9a5a.firebaseapp.com",
  projectId: "hs-chat-app-f9a5a",
  storageBucket: "hs-chat-app-f9a5a.appspot.com",
  messagingSenderId: "852133060858",
  appId: "1:852133060858:web:f84ddc47df1eca14e16943"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//! kimlik doğrulma bölümünün referansını uygulamya al
export const auth = getAuth(app);

//! google sağlayıcısının kurulumunu
export const provider = new GoogleAuthProvider();

// veritbanın referansını al
export const db = getFirestore(app);