import React from "react";
import "./style.css";
import HorrorCard from "../GenreCards/Horror";
import ActionCard from "../GenreCards/Action";
import RomanceCard from "../GenreCards/Romance";
import ComedyCard from "../GenreCards/Comedy";

const Genres = () => {
     

        return (
            <div className="genreDivs">
               <ActionCard />
               <HorrorCard />
               <RomanceCard />
               <ComedyCard />
            </div>
        )
}

 export default Genres;