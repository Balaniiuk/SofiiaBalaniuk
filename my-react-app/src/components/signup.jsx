import React from "react";
import "./signup.css"; 
import eye from "../assets/images/eye 1.png";
import google from "../assets/images/google 1.png";

const  Signup = () => {
    return (
      <div className="signup">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="18" viewBox="0 0 40 18" fill="none">
            <path d="M38.135 10.2045C38.8002 10.2045 39.3395 9.66523 39.3395 9C39.3395 8.33477 38.8002 7.7955 38.135 7.7955V10.2045ZM1.14835 8.14829C0.677959 8.61868 0.677959 9.38132 1.14835 9.85171L8.81373 17.5171C9.28411 17.9875 10.0468 17.9875 10.5171 17.5171C10.9875 17.0467 10.9875 16.2841 10.5171 15.8137L3.70347 9L10.5171 2.18633C10.9875 1.71594 10.9875 0.953295 10.5171 0.482909C10.0468 0.0125237 9.28411 0.0125237 8.81373 0.482909L1.14835 8.14829ZM38.135 9V7.7955L2.00005 7.7955V9V10.2045L38.135 10.2045V9Z" fill="#001A23"/>
        </svg>
        <div className="maincontent">
          <p className="text-1">create an account</p>
          <div className="forms">
            <div className="email">
              <div className="email">
                <p className="text-2">Your email</p>
              </div>
              <p className="text-3">Email</p>
            </div>
            <div className="password">
              <p className="text-4">Password</p>
              <div className="password">
                <p className="text-5">Enter your password</p>
                <img src={eye} />
              </div>
              <p className="text-7">Use at least 8 characters</p>
            </div>
          </div>
          <div className="acception">
            <div className="ellipse-2" />
            <p className="text-8">I accept the terms and privacy policy</p>
          </div>
          <button className="buttons">
            <div className="signin">
              <p className="text-9">Sign in</p>
            </div>
            <div className="or">
              <p className="text-1-0">or</p>
              <div className="line-1" />
              <div className="line-2" />
            </div>
            <div className="google">
              <img src={google} />
              <p className="text-1-2">Continue with Google</p>
            </div>
            <p className="text-1-3">Already have an account? Log in</p>
          </button>
        </div>
      </div>
    );
};

export default Signup;
  
  