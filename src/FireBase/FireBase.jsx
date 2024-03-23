import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB_KvAyyC94FA2dcPqum7UZIyvuPFjHNt0",
  authDomain: "birthday-746bc.firebaseapp.com",
  projectId: "birthday-746bc",
  storageBucket: "birthday-746bc.appspot.com",
  messagingSenderId: "125932700365",
  appId: "1:125932700365:web:d562ad419d50008754df84",
  measurementId: "G-BNT5BJ06MP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
