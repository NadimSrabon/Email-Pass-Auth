// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlAjxBl0hTamwUuGymNjheGp3p0FA8ik0",
  authDomain: "fir-conceptual-6cf61.firebaseapp.com",
  projectId: "fir-conceptual-6cf61",
  storageBucket: "fir-conceptual-6cf61.appspot.com",
  messagingSenderId: "1046786705848",
  appId: "1:1046786705848:web:758f53e09dcece7f0be74d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);