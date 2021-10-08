import React, { Component } from "react";
import "./style.css";
import axios from "axios";

class Genres extends Component {

   state ={
       comedy: [],
       romance: [],
       action: [],
       isLoaded: false
   }

   componentDidMount() {

        const APIkey = "64f6620fb1msh550ea248145b90dp171d28jsn9b849cd5c177";

        const options1 = {
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/auto-complete',
            params: {q: 'comedy'},
            headers: {
                    'x-rapidapi-host': 'imdb8.p.rapidapi.com',
                    'x-rapidapi-key': APIkey
            }
          
        };
         
        const options1Act = axios.request(options1)

        const options2 = {
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/auto-complete',
            params: {q: 'romance'},
            headers: {
                'x-rapidapi-host': 'imdb8.p.rapidapi.com',
                'x-rapidapi-key': APIkey
            }

        };
    
        const options2Act = axios.request(options2)

        const options3 = {
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/auto-complete',
            params: {q: 'action'},
            headers: {
                'x-rapidapi-host': 'imdb8.p.rapidapi.com',
                'x-rapidapi-key': APIkey
            }
        };
    
        const options3Act = axios.request(options3)
            
        axios.all([options1Act, options2Act, options3Act])
        .then(axios.spread((data1, data2, data3) => 
        this.setState({
            comedy: data1,
            romance: data2,
            action: data3,
            isLoaded: true
        })
    )).catch(error => console.error(error));

    console.log(this.state.comedy)
    console.log(this.state.romance)
    console.log(this.state.action)
   }

   render() {

    return (
        <div>Check Cons</div>
    )
    
   }

}



 export default Genres;