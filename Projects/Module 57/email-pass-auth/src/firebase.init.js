// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLawOD0nLzZXjsoIBlyDIa8L3M1VveTt4",
    authDomain: "email-pass-auth-4b7c8.firebaseapp.com",
    projectId: "email-pass-auth-4b7c8",
    storageBucket: "email-pass-auth-4b7c8.appspot.com",
    messagingSenderId: "231191719138",
    appId: "1:231191719138:web:313b96c5142d24d35802bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;