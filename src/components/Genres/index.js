import React, { Component } from "react";
import "./style.css";
import axios from "axios";

class Genres extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }
    }

    componentDidMount() {

        const options = {
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/auto-complete',
            params: {q: 'mystery'},
            headers: {
                'x-rapidapi-host': 'imdb8.p.rapidapi.com',
                'x-rapidapi-key': '06de7c36d9msh9c779a3dc13beccp13f8f8jsn548b5609e348'
            }
        };

        axios.request(options).then((response) => {
                        //     for (var i =0; i < Math.min(response.data.d.length, 5); i++) {
            // console.log(response.data.d[i]);
            //     }

            this.setState({
                items: response.data.d,
                
            })

        })

    }

    render() {

        var { items } = this.state;
        
        return (
            
            <div className="genreDivs">
            <div className="genre action">
                 <div className="leftBox">
                    <h1>Action</h1>
                    {items.map((item) => (
                        <div className="imgDiv">
                            <img height="120px" width="175px" key={item.id} alt={item.l} src={item.i.imageUrl} />
                            <p>{item.l}</p>
                        </div>
                    ))}
                  
               </div>
           </div>
        </div>

        )

    }

}

export default Genres;

            // <ul>
            //     {items.map(item => (
            //         <li key={item.id}>{item.l}</li>
            //     ))}
            // </ul>

                //     <div className="imgDiv">
                //       <img alt="title2" src="" />
                //        <p>TITLE HERE</p>
                //    </div>
                //     <div className="imgDiv">
                //        <img alt="title3" src="" />
                //         <p>TITLE HERE</p>
                //     </div>
                //     <div className="imgDiv">
                //         <img alt="title4" src="" />
                //         <p>TITLE HERE</p>
                //     </div>
                //    <div className="imgDiv">
                //         <img alt="title5" src="" />
                //        <p>TITLE HERE</p>
                //    </div>