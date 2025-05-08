import React from 'react';
import { auth  } from '../Firebase/Firebase.init';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
const Google = () => {
    const provider = new GoogleAuthProvider ();

    const handleLogin = async () => {
        try {
          const result = await signInWithPopup(auth, provider);
          const user = result.user;
          console.log("Logged in user:", user);
        } catch (error) {
          console.error("Google login error:", error);
        }
      };
       handleLogin()
}
export default Google;