// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGK0BjUuNWkWNrZk9BPu0UaVFEG5SLNb8",
  authDomain: "reactlogin-e663d.firebaseapp.com",
  projectId: "reactlogin-e663d",
  storageBucket: "reactlogin-e663d.appspot.com",
  messagingSenderId: "771298619284",
  appId: "1:771298619284:web:931669799aaa56bd142981"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app