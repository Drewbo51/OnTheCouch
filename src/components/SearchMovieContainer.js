import API from "../utils/api";
import React, { Component } from "react";
import Home from "./Home";
import ResultsCard from "./ResultsCard";

class SearchMovieContainer extends Component {

    state = {
        items: {},
        search: ""
    }

    componentDidMount() {
        this.searchReviews();
    }

    searchReviews = (query) => {
        API.search(query).then(res => {
            this.setState({
                items: {...res.data.results}
            })
            console.log(this.state.items)
        }).catch(error => { console.log(error)});
    };

    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.searchReviews(this.state.search);
    };

    render() {
        return (
            <div>
            <Home
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            state={this.state.search}
            />
            // <ResultsCard
            // imageSrc={res.multimedia.src}
            title={this.state.items.display_title}
            review={this.state.items.summary_short}
            linkToReviewSource={this.state.items.link.url}
            />
            </div>           
        );
    }
};

export default SearchMovieContainer;

            // <ResultsCard
            // // imageSrc={res.multimedia.src}
            // title={this.state.items.display_title}
            // review={this.state.items.summary_short}
            // linkToReviewSource={this.state.items.link.url}
            // />