<<<<<<< HEAD
import React from "react";
import "./style.css";

function Footer() {
    return (
        <div class="jumbotron jumbotron-fluid lastSheet">
        <div class="container finalMoves">
            <div className="footerPieces">
            <h5>API's Used</h5>
            <p>NY Times Reviews and IMDB</p>
            </div>
            <div className="footerPieces">
            <h5>Contributors</h5>
            <p>Jasmine Wong, Jonathan Segobia, Mike Thomas,</p>
            <p>Andrew Evans, Kristian Willey</p>
            </div>
        </div>
        </div>
=======
import React from 'react';


const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Colum1*/}
                    <div className="col">
                        <h4>OntheCouch Reviews</h4>
                        <ul className="list-unstyled">
                            <li>Bay Area and SoCal</li>
                            <li>Contributors</li>
                            <li>The Vision</li>
                        </ul>
                    </div>
                   {/* column2*/}
                    <div className="col">
                        <h4>About</h4>
                        <ul className="list-unstyled">
                            <li>Careers</li>
                            <li>Support</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    {/* column3*/}
                    <div className="col">
                        <h4>Privacy Policy</h4>
                        <ul className="list-unstyled">
                            <li>Legal</li>
                            <li>Terms</li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()}

                    </p>
                </div>
                </div>

            </div>
        </div>
>>>>>>> 2c77a8fd390631f641746b3a1b12f1cb47b959fd
    )
}

export default Footer;