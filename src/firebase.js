import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

/** FIREBASE CONFIG REMOVED FOR PRIVACY */
const firebaseConfig = {
  apiKey: "**********************",
  authDomain: "**********************",
  projectId: "**********************",
  storageBucket: "**********************",
  messagingSenderId: "**********************",
  appId: "**********************",
  measurementId: "**********************"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;