import React from "react";
import "./cooks.css";
import chef from "../assets/images/Шеф.png";
import schef from "../assets/images/Су-шеф.png";
import chopsticks from "../assets/images/Палички.png";

const Cooks = () => {
    return (
        <section id="cooks" className="cooks">
            <div className="container">
                <div className="center-text">
                    <h2>OUR COOKS</h2>
                </div>

                <div className="background-text1">
                    佐藤匠
                </div>

                <div className="background-text2">
                    田中涼
                </div>

                <div className="cooks-img">
                    <img className="chef-img" src={chef} alt="Chef"/>
                    <img className="sous-chef-img" src={schef} alt="Sous-Chef" />
                </div>
                
                <img className="chopsticks" src={chopsticks} alt="Сhopsticks"/>

                <div className="cooks-content">
                    <div class="chef">
                        <h4>TAKUMI SATO – CHEF</h4>
                        <p>Takumi Sato is a master of traditional and modern ramen-making. With years of experience, he carefully crafts rich, flavorful broths and perfectly balanced toppings, ensuring each bowl is a masterpiece. His dedication to quality and authenticity brings the true essence of Japanese ramen to our restaurant.</p>
                    </div>

                    <div className="sous-chef">
                        <h4>RYO TANAKA – SOUS CHEF</h4>
                        <p>Ryo Tanaka is the right hand of the Head Chef, assisting in preparation, plating, and innovation. Skilled in precision and technique, he ensures every ingredient is fresh and every dish is executed to perfection. His passion for ramen elevates every bowl to an unforgettable experience.</p>
                    </div>  
                </div>
            </div>
        </section>
    );
};

export default Cooks;