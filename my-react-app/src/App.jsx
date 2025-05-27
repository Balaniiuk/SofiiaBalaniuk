import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Signup from './components/signup';
import About from './components/about';
import Cooks from './components/cooks';
import Feedback from './components/feedback';
import Menu from './components/menu';
import MainPage from "./components/MainPage";
import Create from "./components/create";
import logo from "/Logo.png";
import copy from "/Лого копія.png";
import line from "/Line 8.png";



function App() {
  return (
    <Router>
      <div>
        <header>
          <div className="container">
            <div className="header-content">

              <Link to="/MainPage">
                <img className="header-content_logo" src={logo} alt="Tonkotsu Tales Logo" />  
              </Link>

              <nav className="nav">
                  <Link to="/create">Create Own One</Link>
                  <Link to="/menu">Menu</Link>
                  <Link to="/cooks">Our Cooks</Link>
                  <Link to="/about">About Us</Link>
                  <Link to="/feedback">Feedback</Link>
                  <Link to="/signup">Sign Up</Link>
              </nav>

              <div className="burger">
                <span></span>
                <span></span>
                <span></span>
              </div>

            </div>
          </div>
        </header>

        <main>
          <Routes>
              
              <Route path="/" element={<MainPage />} />
              <Route path="/MainPage" element={<MainPage />} />
              <Route path="/create" element={<Create />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/cooks" element={<Cooks />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/about" element={<About />} />
              <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>

        <footer className="last">
        
          <div className="container">
            <Link to="/MainPage">
              <img src={copy} alt="Tonkotsu Tales Logo" />
            </Link>
            
            <div className="footer-nav">
              <nav>
                  <Link to="/create">Create Own One</Link>
                  <Link to="/menu">Menu</Link>
                  <Link to="/cooks">Our Cooks</Link>
                  <Link to="/feedback">Feedback</Link>
                  <Link to="/about">About Us</Link>
                  <Link to="/signup">Sign Up</Link>
              </nav>
            </div>
          </div>
        
          <div className="line">
            <img src={line} alt="" />
          </div>
        
          <div className="text">
            <p>&copy; 2025 Tonkotsu Tales | All rights reserved</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;