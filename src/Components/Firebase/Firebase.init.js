import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFoZiGiUdwtQYmpBM0r0siTxilxYUF5K8",
  authDomain: "assaing-ment-9-c7ad7.firebaseapp.com",
  projectId: "assaing-ment-9-c7ad7",
  storageBucket: "assaing-ment-9-c7ad7.firebasestorage.app",
  messagingSenderId: "159329831724",
  appId: "1:159329831724:web:546f055c175b93a788fa89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth  = getAuth(app);
