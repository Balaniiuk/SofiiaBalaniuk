import React, { useState } from "react"
import "./signup.css";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAccepted, setIsAccepted] = useState(false);
  const isFormValid = email.trim() !== "" && password.trim() !== "" && isAccepted;

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); 
    } catch (err) {
      alert("Login failed: " + err.message); 
    }
  };

  return (
    <div className="login">
      <div className="maincontent">
        <p className="text-1">Welcome back!</p>

        <div className="forms">
          <div className="email">
            <label className="text-3" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="email-input"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="password">
            <label className="text-4" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="password-input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-7">Use at least 8 characters</p>
          </div>
        </div>

        <div className="acception">
          <input
            type="checkbox"
            id="terms"
            className="ellipse-2"
            checked={isAccepted}
            onChange={(e) => setIsAccepted(e.target.checked)}
          />
          <label htmlFor="terms" className="text-8">
            I accept the terms and privacy policy
          </label>
        </div>

        <div className="buttons">
          <button
            className={`loginb ${isFormValid ? "loginb-active" : ""}`}
            disabled={!isFormValid}
            onClick={handleLogin}
          >
            <p className="text-9">Log in</p>
          </button>
          <p className="text-1-3">Don't have an account? <a onClick={() => navigate("/signup")}>Sign up</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
