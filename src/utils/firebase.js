// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCn_zmd77EwVwvu7v7bs1e-vFD82i1C0mI",
  authDomain: "tasky-2a754.firebaseapp.com",
  projectId: "tasky-2a754",
  storageBucket: "tasky-2a754.firebasestorage.app",
  messagingSenderId: "762879310075",
  appId: "1:762879310075:web:20edf90293d0866ad1d85e",
  measurementId: "G-H8D71D4QH6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
