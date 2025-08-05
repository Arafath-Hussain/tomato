import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  return (
    <div className="loginpopup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-input">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Enter your name" required />
          )}
          <input type="email" placeholder="Enter your email" required />
          <input type="password" placeholder="Enter your password" required />
        </div>
        <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new Account? <span onClick={()=>setCurrState("Sign Up")}>Click Here</span>
          </p>
        ) : (
          <p>
            Already have an accout? <span onClick={()=>setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
