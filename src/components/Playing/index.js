import React from "react";
import "./style.css";
import PlayingCards from "../PlayingCards/PlayingCards";
import PlayingCards2 from "../PlayingCards/PlayingCards2";

function Playing() {
    
    return (
     <div className="lastOne">
          <h1><em>Currently In Theatres</em></h1>
        <div className="flashDivs">
            <PlayingCards />
            <PlayingCards2 />
        </div>
     </div>
    )
}

export default Playing;