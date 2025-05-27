import React, { useState } from "react";
import "./signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAccepted, setIsAccepted] = useState(false);

  // Перевірка валідності форми: всі три умови повинні бути виконані
  const isFormValid = email.trim() !== "" && password.trim() !== "" && isAccepted;

  return (
    <div className="signup">
      <div className="maincontent">
        <p className="text-1">Create an account</p>

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
            onChange={(e) => setIsAccepted(e.target.checked)} // Оновлення стану чекбокса
          />
          <label htmlFor="terms" className="text-8">
            I accept the terms and privacy policy
          </label>
        </div>

        <div className="buttons">
          <button
            className={`signin ${isFormValid ? "signin-active" : ""}`}
            disabled={!isFormValid} // Деактивація кнопки, якщо форма не валідна
          >
            <p className="text-9">Sign in</p>
          </button>
          <p className="text-1-3">Already have an account? <a>Log in</a></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;