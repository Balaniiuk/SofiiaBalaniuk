import React from "react";
import "./about.css";

const About = () => {
    return (
        <section id="contacts" className="contacts">
            <div className="container">
                <div className="center-text">
                    <h2>CONTACTS AND LOCATION</h2>
                </div>

                <div className="background-text">東京</div>

                <div className="contacts-map">
                    <div className="contacts-content">
                        <h3>Tonkotsu tales</h3>
                        <div className="block1">
                            <p className="adress"> 3-5-7 Shibuya, Shibuya City, Tokyo 150-0002, Japan</p>
                            <p className="number">+81 3-1234-5678</p>
                            <p className="gmail">Tonkotsu.tales@gmail.com</p>
                        </div>
                        
                        <div className="block2">
                            <h4> Opening Hours:</h4>

                            <p className="hours">
                                Monday – Friday: 11:00 AM – 10:00 PM
                                Saturday – Sunday: 12:00 PM – 11:00 PM
                                Holidays: 12:00 PM – 9:00 PM
                            </p>
                        </div>
                    </div>

                    <div className="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7199.543576066293!2d139.68818023077702!3d35.6722390924034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1742331871685!5m2!1suk!2sua"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;