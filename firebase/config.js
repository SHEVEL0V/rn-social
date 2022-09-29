/** @format */

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyAPN0qj2taNChW7E10JWYzE50Z9tVHy1pk",
  authDomain: "social-aee0a.firebaseapp.com",
  projectId: "social-aee0a",
  storageBucket: "social-aee0a.appspot.com",
  messagingSenderId: "874750735107",
  appId: "1:874750735107:web:ab4e1500d1cdf186d3ef36",
  measurementId: "G-W22VT5N30M",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
