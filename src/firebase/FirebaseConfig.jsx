// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr3xflGre2xNOHPHmdL3OwI8MTFHBpbng",
  authDomain: "eshop-mate.firebaseapp.com",
  projectId: "eshop-mate",
  storageBucket: "eshop-mate.appspot.com",
  messagingSenderId: "180522842168",
  appId: "1:180522842168:web:9566a254e9ae9aa12f0ecd",
  measurementId: "G-44TKTFDEY1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { fireDB, auth, storage };
