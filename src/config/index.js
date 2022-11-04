// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, GoogleAuthProvider, getRedirectResult, onAuthStateChanged } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAxq7YkNI2Iu7-cK-tPE4tLO1wx6oJNhHc",
	authDomain: "hello-alt-school-f9c9e.firebaseapp.com",
	projectId: "hello-alt-school-f9c9e",
	storageBucket: "hello-alt-school-f9c9e.appspot.com",
	messagingSenderId: "167366963323",
	appId: "1:167366963323:web:c019c34047fd791adfb2de",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Set up auth provider
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth, signInWithRedirect, getRedirectResult, onAuthStateChanged };
