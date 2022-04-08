// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlEYgM6YnMqHCCDJiG6lTn3tGsYEmtGuc",
    authDomain: "router-firebase-integraton.firebaseapp.com",
    projectId: "router-firebase-integraton",
    storageBucket: "router-firebase-integraton.appspot.com",
    messagingSenderId: "934688435179",
    appId: "1:934688435179:web:cf280709ea31b90796c7ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;