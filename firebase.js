// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcIlr2OTZ0VCmdhHRyod2AK8Y-YW_j_Do",
  authDomain: "uber-clone-ff441.firebaseapp.com",
  projectId: "uber-clone-ff441",
  storageBucket: "uber-clone-ff441.appspot.com",
  messagingSenderId: "138248614638",
  appId: "1:138248614638:web:06434b43bdb16a4226b9ff",
  measurementId: "G-CCT895102H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export { app, analytics, provider, auth };
