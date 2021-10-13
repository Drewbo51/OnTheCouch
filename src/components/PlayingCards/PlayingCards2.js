import React, { Component } from "react";
import movies2 from "../../playingNow2.json";

class PlayingCards2 extends Component {

    state = {
        movies2
    }

    render() {
        return (
            
        <div className="flash">
             <div className="newBox">
                {this.state.movies2.map((movie) => {
                    return (
                        <div key={movie.id} className="lilDiv">
                            <a href={`https://www.imdb.com/title/${movie.movie_id}/?ref=fn_al_tt_1`}><img alt={movie.title} height="200px" width="255px" src={movie.poster} /></a>
                            <h6>{movie.title}</h6>
                            <p>Year of Release: {movie.year}</p>
                        </div>
                    )
                })}
                </div>
            </div>
        )
    }
}

export default PlayingCards2;