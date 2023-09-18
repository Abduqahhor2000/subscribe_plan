import { initializeApp, getApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCEtw8iNpo08FnIQc2cqpyZztwraStP4_E",
    authDomain: "abdu-movie.firebaseapp.com",
    projectId: "abdu-movie",
    storageBucket: "abdu-movie.appspot.com",
    messagingSenderId: "701386919065",
    appId: "1:701386919065:web:da131cf9d6ab25d1217c08",
    measurementId: "G-MKZMQRFXWP"
  };

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export {db, auth};
