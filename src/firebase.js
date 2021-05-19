// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// eslint-disable-next-line no-unused-vars
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBKSpjaiwdCIGJXKB6abPdonnmhB1jzlfg",
  authDomain: "challenge-c679c.firebaseapp.com",
  projectId: "challenge-c679c",
  storageBucket: "challenge-c679c.appspot.com",
  messagingSenderId: "1043994971434",
  appId: "1:1043994971434:web:e5d9b34ca4f05b71742253",
  measurementId: "G-JB7863E7ME",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
