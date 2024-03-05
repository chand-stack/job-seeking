// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_WjkOQ64JwowkyM4qPJyXpaIQg-L6LSc",
    authDomain: "job-seeking-2fe17.firebaseapp.com",
    projectId: "job-seeking-2fe17",
    storageBucket: "job-seeking-2fe17.appspot.com",
    messagingSenderId: "1068303617395",
    appId: "1:1068303617395:web:3fb122fed0fb2153e54906",
    measurementId: "G-Z253B9WXSZ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth