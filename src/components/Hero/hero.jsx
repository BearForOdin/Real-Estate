import React from "react";
import "./Hero.css";
import {HiLocationMarker} from "react-icons/hi"
import CountUp from "react-countup";

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">

            {/* Left side */}
               <div className="hero-left">

                   <div className="hero-title">
                    <div className="orange-circle"/>
                        <h1>Discover <br/>Most Suitable <br/>Property</h1>
                    </div>

                    <div className="flexColStart hero-des">
                        <span className="secondaryText">Find a variety of properties that suit you very easily</span>
                        <span className="secondaryText">Reduce the burden of looking for the right properties</span>
                    </div>

                    <div className="flexCenter search-bar">
                        <HiLocationMarker color="var(--blue)" size={25}/>
                        <input type="text"/>
                        <button className="button">Search</button>
                    </div>
                    
                    <div className="flexCenter stats">
                        <div className="flexColStart stat">
                            <span>
                                <CountUp start={8800} end={9000} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className="secondaryText">Premium Products</span>
                        </div>

                        <div className="flexColStart stat">
                            <span>
                                <CountUp start={1950} end={2000} duration={4}/>
                                <span>+</span>
                             </span>
                                <span className="secondaryText">Happy Customers</span>
                           
                        </div> 

                        <div className="flexColStart stat">
                            <span>
                                <CountUp end={28}/>
                                <span>+</span>
                            </span>
                            <span  className="secondaryText">Award Winnings</span>
                        </div> 
                    </div>
                </div>
            {/* Right side */}
               <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./hero-image.png" alt="" />
                    </div>
                </div>  
            </div>
        </section>
    )
}

export default Hero; 