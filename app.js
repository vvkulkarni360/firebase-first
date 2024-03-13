// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKpdLgTCUpwLQycNAOyEYNsj3-BYL0jRQ",
  authDomain: "fir-first-b0bf9.firebaseapp.com",
  projectId: "fir-first-b0bf9",
  storageBucket: "fir-first-b0bf9.appspot.com",
  messagingSenderId: "187606352884",
  appId: "1:187606352884:web:23baeb5df79fd463d32fa1",
  measurementId: "G-9CW88DPNRB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Login function
function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log("User logged in:", user);
        // Redirect to dashboard or any other page
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error("Login error:", errorMessage);
    });
}

// Signup function
function signup() {
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed up
        var user = userCredential.user;
        console.log("User signed up:", user);
        // Redirect to dashboard or any other page
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error("Signup error:", errorMessage);
    });
}