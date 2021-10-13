import React from "react";
import "./style.css";
import couch from "./couch.jpg";

function About() {
    return (
        <div className="leaderDiv">
            <div className="leadDiv">
        <div className="fillerDiv"></div>
                <img src={couch} alt="couch" height="250px" width="325x" />
                </div>
            <div className="leadDiv">
                <div className="fillerDiv"></div>
                <div className="mainCenter">
                <h2><em>Don’t know what movie to watch next? We got you! On The Couch Reviews has the best and most reliable movie reviews, all from the comfort of your own home.
    Browse through hundreds of new and exciting movies today!</em></h2>
                <p></p>
                </div>
            </div>
        </div>      
    )
}

export default About;
