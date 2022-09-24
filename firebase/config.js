/** @format */

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDX6O2WVOj7qetC6zJd9pfnL-sY_i_WTGA",
  authDomain: "rn-social-8dac9.firebaseapp.com",
  projectId: "rn-social-8dac9",
  storageBucket: "rn-social-8dac9.appspot.com",
  messagingSenderId: "966272444872",
  appId: "1:966272444872:web:21b6e0b2bb81e1a450f8fd",
  measurementId: "G-S1GGJPF1PR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
