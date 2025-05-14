import React from 'react';
import "./create.css";
import han from "../assets/images/Когут.png";
import pig from "../assets/images/Pig.png";
import leaves from "../assets/images/Leaves.png";
import ellipse from "../assets/images/Ellipse 50.png";
import egg from "../assets/images/Яйце.png";
import naruto from "../assets/images/Наруто.png";
import corn from "../assets/images/Кукурудза.png";
import meat from "../assets/images/Meat.png";
import onion from "../assets/images/Зелень.png";
import mashrooms from "../assets/images/Гриб.png";
import ramen2 from "../assets/images/Рамен2.png";

const Create = () => {
  return (
    <section id="create" className="create">
            <div className="container">
                <div className="center-text">
                    <h2>CREATE YOUR OWN RAMEN</h2>
                </div>

                <div className="background-text">
                    ラーメン
                </div>

                <div className="inner">
                    <div>
                        <div className="titles-container">
                            <div className="broth">
                                <h3>BROTH</h3>
                            </div>
        
                            <div className="noodles">
                                <h3>NOODLES</h3>
                            </div>
                        </div>
        
                        <div className="content-container">
                            <div className="icons">
        
                                <div className="icon-item">
                                    <img src={han} alt="Chicken"/>
                                    <h4>CHICKEN</h4>
                                </div>
            
                                <div className="icon-item">
                                    <img src={pig} alt="Pork"/>
                                    <h4>PORK</h4>
                                </div>
            
                                <div className="icon-item">
                                    <img src={leaves} alt="Vegan"/>
                                    <h4>VEGAN</h4>
                                </div>
                            </div>
            
                            <div className="noodles-content">
                                <h4>THICK</h4>
                                <img class="ellipse" src={ellipse} alt=""/>
                                <h4>THIN</h4>
                            </div>
                        </div>
        
                        <div className="base">
                            <h3>BASE</h3>
                            <div className="base-content">
                                <h4>BASIC</h4>
                                <img className="ellipse" src={ellipse} alt=""/>
                                <h4>MISO</h4>
                                <img className="ellipse" src={ellipse} alt=""/>
                                <h4>PONZU</h4>
                                <img className="ellipse" src={ellipse} alt=""/>
                                <h4>SPICY</h4>
                            </div>
        
                            <p>
                                The base includes: broth, noodles, pickled egg or tofu, corn, green onions, sesame seeds, French fries, wakame, nori and black garlic oil, nori leaves.
                            </p>
                        </div>
        
                        <div className="toppings">
                            <h3>TOPPINGS</h3>
                        </div>
        
                        <div className="toppings-icons">
                            <div className="first-row">
                                <div className="eggs">
                                    <img src={egg} alt="Egg"/>
                                    <h4>EGGS</h4>
                                </div>
            
                                <div className="narutomaki">
                                    <img src={naruto} alt="Narutomaki"/>
                                    <h4>NARUTOMAKI</h4>
                                </div>
            
                                <div className="corn">
                                    <img src={corn} alt="Corn"/>
                                    <h4>CORN</h4>
                                </div>
                            </div>
                            
                            <div className="second-row">
                                <div className="meat">
                                    <img src={meat} alt="Meat"/>
                                    <h4>MEAT</h4>
                                </div>
            
                                <div className="onion">
                                    <img src={onion} alt="Onion & Capers"/>
                                    <h4>ONION & CAPERS</h4>
                                </div>
            
                                <div className="mashrooms">
                                    <img src={mashrooms} alt="Mashrooms"/>
                                    <h4>MASHROOMS</h4>
                                </div>
                            </div>
        
                        </div>
        
                    </div>
                    <div className="create-inner">
                         <img src={ramen2} alt="Ramen Bowl"/>
                    </div>
                </div>

            </div>
        </section>
  );
};

export default Create;