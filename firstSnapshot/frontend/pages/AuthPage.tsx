import { auth } from "@/firebase";
import React, { useState } from 'react';
import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { useCheckbox } from "./CheckboxContect";

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
      <nav className="navbar">
         <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Chat</a></li>
          <li><a href="#">Resources</a></li>
        </ul>
      </nav>
       <div className="logo">
        <img src="chattylogo.jpeg.jpg" alt="Logo" />
        </div>
      <div className="text2">Welcome to Chatty</div>
      <p>{"Unlock your full potential by connecting with experienced mentors who can guide and inspire you on your journey."}</p>
      <div className="text" style={{ paddingBottom: "16px" }}>
       Sign up or log in now to find your perfect mentor match and accelerate your personal and professional growth.
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