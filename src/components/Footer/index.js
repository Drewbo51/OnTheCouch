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
    )
}

export default Footer;