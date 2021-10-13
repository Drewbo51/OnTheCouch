import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function Navbar() {

    const location = useLocation();

    return (
        <ul class="nav nav-tabs justify-content-center newSheet2">
            <li class="nav-item">
            <Link to="/genres" className={location.pathname === "/genres" ? "nav-link active" : "nav-link"}>
                Genres
            </Link>
            </li>
<<<<<<< HEAD
            <li className="nav-item">
            <Link to="/searchReviews" className={location.pathname === "/searchReviews" ? "nav-link active" : "nav-link"}>
                Search Reviews
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                Home
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/Playing" className={location.pathname === "/playing" ? "nav-link active" : "nav-link"}>
                In Theatres
=======
            <li class="nav-item">
            <Link to="/" className={location.pathname === "/home" ? "nav-link active" : "nav-link"}>
                Home
            </Link>
            </li>
            <li class="nav-item">
            <Link to="/blockbuster" className={location.pathname === "/blockbuster" ? "nav-link active" : "nav-link"}>
                Blockbuster
            </Link>
            </li>
            <li class="nav-item">
            <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                About
>>>>>>> 4594abe1698fb615aeed33fd3bec24abbecefe80
            </Link>
            </li>
        </ul>
    );
}

export default Navbar;
