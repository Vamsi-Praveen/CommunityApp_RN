import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

// Initialize Firebase
const FIREBASE = initializeApp(firebaseConfig);
const FIREBASE_AUTH = getAuth(FIREBASE)

export { FIREBASE, FIREBASE_AUTH }