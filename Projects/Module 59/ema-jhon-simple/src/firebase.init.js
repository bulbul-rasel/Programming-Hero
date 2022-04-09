// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqnNBxjTcMK5y4d_ixdkXITkZi1IM59v8",
    authDomain: "ema-jhon-simple-14e4a.firebaseapp.com",
    projectId: "ema-jhon-simple-14e4a",
    storageBucket: "ema-jhon-simple-14e4a.appspot.com",
    messagingSenderId: "618801270268",
    appId: "1:618801270268:web:ce59fca722c29803ee3679"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;