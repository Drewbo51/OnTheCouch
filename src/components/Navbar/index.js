import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function Navbar() {

    const location = useLocation();

    return (
        <ul className="nav nav-tabs justify-content-center newSheet2">
            <li className="nav-item">
            <Link to="/Genres" className={location.pathname === "/genres" ? "nav-link active" : "nav-link"}>
                Genres
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/searchReviews" className={location.pathname === "/searchReviews" ? "nav-link active" : "nav-link"}>
                Search Reviews
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                About
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/Playing" className={location.pathname === "/playing" ? "nav-link active" : "nav-link"}>
                In Theatres
            </Link>
            </li>
        </ul>
    );
}

export default Navbar;
