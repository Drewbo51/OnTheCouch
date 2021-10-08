import React from "react";
import "./style.css";

function ResultsCard(props) {
    return (
                <div className="card">
                        <img src={props.imageSrc} className="card-img-top" alt={props.title} />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.review}</p>
                        <a href={props.linkToReviewSource} className="btn btn-primary">{props.linkToReviewSource}</a>
                    </div>
                </div>
    );
}

export default ResultsCard;