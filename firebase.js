// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGgrxP6XHIpm9fEt2Rf86pAJ_A7OvoCEQ",
  authDomain: "mydaily-48f99.firebaseapp.com",
  projectId: "mydaily-48f99",
  storageBucket: "mydaily-48f99.appspot.com",
  messagingSenderId: "42443086665",
  appId: "1:42443086665:web:a538497d832bd076e8d898",
  measurementId: "G-NLQRNYMFFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
