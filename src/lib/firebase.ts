import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBd442YK0DsD1G2aglTAJXz2YloPwWw1YA",
  authDomain: "codmac-website.firebaseapp.com",
  projectId: "codmac-website",
  storageBucket: "codmac-website.firebasestorage.app",
  messagingSenderId: "225913608807",
  appId: "1:225913608807:web:2d75c9f18a3d8591e352c2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);