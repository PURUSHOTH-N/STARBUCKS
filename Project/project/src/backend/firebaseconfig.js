import { initializeApp } from "firebase/app";

//! Authentication services from Firebase
import { getAuth } from "firebase/auth";

//! Database ervices from firebase
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmQogfLmvCmW5u2bt6P0kPg6zC1m9amwo",
  authDomain: "project-ac80.firebaseapp.com",
  projectId: "project-ac80",
  storageBucket: "project-ac80.firebasestorage.app",
  messagingSenderId: "1067402612765",
  appId: "1:1067402612765:web:a871ce5c63d0c9ac77b6f4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export let __AUTH = getAuth(firebaseApp);
export let __DB = getFirestore(firebaseApp);

export default firebaseApp;