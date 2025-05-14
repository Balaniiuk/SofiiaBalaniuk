import React from "react";
import "./MainPage.css"; 
import { Link } from 'react-router-dom';
import ramen from "../assets/images/Ramen.png";


const MainPage = () => {
  return (
    <main>
      <section className="main">
        <div className="container">
          <div className="main-content">
            <div className="box">
              <div className="background-text">豚骨物語</div>
                        
              <div className="text-content">

                <h1>TONKOTSU TALES</h1>
                        
                <p>Stories from tender pork broth within our walls. Come and try your favorite signature ramen.</p>
                            
                <Link to="/menu" className="menu-button">
                  MENU
                </Link>

              </div>
                        
            </div>

            <img className="main-img" src={ramen} alt="Ramen" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainPage;
        