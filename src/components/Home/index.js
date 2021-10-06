import React from "react";
import "./style.css";

function Home() {
    return (
        <div className="newSheet3">
            <div className="altered">

            </div>
            <h5>Today's theatre hits brought to you with top level reviews.</h5>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
            
                <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </nav>
        </div>
    )
}

export default Home;