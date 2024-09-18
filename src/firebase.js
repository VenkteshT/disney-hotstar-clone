import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBRPMw-nx4JM1qB8CKpzphFgHG0d8CtU6U",
  authDomain: "disney-hotstar-clone-8ff53.firebaseapp.com",
  projectId: "disney-hotstar-clone-8ff53",
  storageBucket: "disney-hotstar-clone-8ff53.appspot.com",
  messagingSenderId: "1491292351",
  appId: "1:1491292351:web:59add30ec3afd8ab6d760a",
  measurementId: "G-X6WS3QVWM5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Authentication
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Initialize Storage
const storage = getStorage(app);

export { auth, provider, storage };
export default db;
