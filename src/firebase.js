import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBenoXrJjoIQTfY1C_aN8i_7pO_bm2nuxQ",
  authDomain: "financly-82bcc.firebaseapp.com",
  projectId: "financly-82bcc",
  storageBucket: "financly-82bcc.firebasestorage.app",
  messagingSenderId: "772222871189",
  appId: "1:772222871189:web:76cf6ca09d43b0217ddd9c",
  measurementId: "G-E61B5CBJKD",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export { db, auth, provider, doc, setDoc };
