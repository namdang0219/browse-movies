import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE,
  authDomain: "mymovie-318d8.firebaseapp.com",
  projectId: "mymovie-318d8",
  storageBucket: "mymovie-318d8.appspot.com",
  messagingSenderId: "286690577080",
  appId: "1:286690577080:web:a4c08dd4086c1f302f824d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)