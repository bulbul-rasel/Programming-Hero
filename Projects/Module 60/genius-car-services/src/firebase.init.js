// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpvFc1Ci9tQlBQJgDsZcGrLmBNortpPgc",
    authDomain: "genius-car-service-d33e1.firebaseapp.com",
    projectId: "genius-car-service-d33e1",
    storageBucket: "genius-car-service-d33e1.appspot.com",
    messagingSenderId: "1078697891390",
    appId: "1:1078697891390:web:98fa0bfc2c70553fdaa36f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;