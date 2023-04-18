import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword  } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore, collection, addDoc } from "firebase/firestore";





// Initialize Firebase
const app = initializeApp({
  apiKey: "AIzaSyBS1fCY-_I-V4WZYveOTNmx9ByGDRaCW70",
  authDomain: "pre-phrase.firebaseapp.com",
  databaseURL: "https://pre-phrase-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pre-phrase",
  storageBucket: "pre-phrase.appspot.com",
  messagingSenderId: "531222180809",
  appId: "1:531222180809:web:91c3af0b3779e82801ee18",
  measurementId: "G-1EJ9733JN2"
});

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);



export  {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
}