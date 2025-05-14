import React from "react";
import "./footer.css";
import logo from "../assets/images/Лого копія.png";
import line from "../assets/images/Line 8.png";


const Footer = () => {
    return (
        <footer className="last">

            <div className="container">
                <a href="#main" class="footer-logo">
                    <img src={logo} alt="Tonkotsu Tales Logo" />
                </a>
    
                <div className="footer-nav">
                    <nav>
                        <a href="#create">Menu</a>
                        <a href="#cooks">Our Cooks</a>
                        <a href="#contacts">About Us</a>
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
    );
};

export default Footer;