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
            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                Blockbuster
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/Home" className={location.pathname === "/home" ? "nav-link active" : "nav-link"}>
                Home
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                About
            </Link>
            </li>
        </ul>
    );
}

export default Navbar;
