import React, { useEffect, useState } from "react";
import Home from "./Home";
import axios from "axios";
import "./searchMovieContainer.css";
import placeHolder from './placeHolder.jpg';

const SearchMovieContainer = () => {

    const [ items, setItems ] = useState([]);
    const [ name, setName ] = useState("");
    const [ inputChange, setInputChange ] = useState("");


    const changeEvent = (event) => {
        setName(event.target.value);
    }

    const onClickFunction = (event) => {

        event.preventDefault();

        if(name === "") {
            alert("Please Enter a Valid Movie Title")
            return
        }
         async function getReview() {

            const result = await axios.get("https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=" + name + "&api-key=dcJvhvqSgkbREL8089hmt7neiL70YSW1");
            setItems(result.data.results);
            setInputChange(name);
         }
         getReview();
         
    }

    useEffect(() => {}, [inputChange])

        return (
            <div>
            <Home
            changeEvent={changeEvent}
            onClickFunction={onClickFunction}
            value={name}
            />
                <div className="cardDiv">
                {items.map((item, index) => {
                    return (
                        <div key={index} className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                { item.multimedia === null ? <p><strong>NO PHOTO AVAILABLE</strong></p> : ""}
                                { item.multimedia === null ? <img src={placeHolder} className="card-img-top" alt={item.display_title} /> : <img src={item.multimedia.src} className="card-img-top" alt={item.display_title} /> }
                                </div>
                                <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{item.display_title}</h5>
                                    <p className="card-text">{item.summary_short}</p>
                                    <a href={item.link.url} className="btn btn-primary">Click Here to See Review from NY Times Reviews</a>
                                </div>
                                </div>
                            </div>
                            </div>                   
                    )
                })}
                </div>
            </div>
        );
    
}

export default SearchMovieContainer;