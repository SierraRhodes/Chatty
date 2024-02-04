import { auth } from "@/firebase";
import React, { useState } from 'react';
import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

export default function AuthPage() {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const onClick = () => {
    signInWithRedirect(auth, new GoogleAuthProvider());
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };


  return (
    <div className="page">
      <div className="logo">👋 💬 🤖 </div>
      <div className="text">Welcome to ChatRCE</div>
      <div className="text" style={{ paddingBottom: "16px" }}>
        Log in with your account to continue
      </div>
      <button className="button" onClick={onClick}>
        Log In
      </button> <button className="button" onClick={onClick}>
        Sign Up
      </button>
      <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
         Check if you are a Mentor
        </label>
        <p>{isChecked ? 'Welcome Mentor! 👋' : 'Join the chat as a Mentee!'}</p>
      </div>
    </div>
  );
}  




//Unlock your full potential by connecting with experienced mentors who can guide and inspire you on your journey. Sign up or log in now to find your perfect mentor match and accelerate your personal and professional growth.