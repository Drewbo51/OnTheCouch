// import React, { Component } from "react";
// import axios from "axios";

// class Mystery extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             items: [],
//         }
//     }

//     componentDidMount() {

//         const options = {
//             method: 'GET',
//             url: 'https://imdb8.p.rapidapi.com/auto-complete',
//             params: {q: 'mystery'},
//             headers: {
//                 'x-rapidapi-host': 'imdb8.p.rapidapi.com',
//                 'x-rapidapi-key': '06de7c36d9msh9c779a3dc13beccp13f8f8jsn548b5609e348'
//             }
//         };

//         axios.request(options).then((response) => {
                           
//             // for (var i =0; i < Math.min(response.data.d.length, 5); i++) {
//             //     const result = response.data.d[i];
//             // }

//             this.setState({
//                 items: [response.data.d],
                
//             })

//         })

//     }

//     render() {

//         var { items } = this.state;
        
//         return (
            
            
//             <div className="genre action">
//                  <div className="leftBox">
//                     <h1>Mystery</h1>
//                     {items.map((item) => (
//                         <div className="imgDiv">
//                             <img height="120px" width="175px" key={item.id} alt={item.l} src={item.i.imageUrl} />
//                             <p>{item.l}</p>
//                         </div>
//                     ))}
                  
//                </div>
//            </div>
        

//         )

//     }

// }

// export default Mystery;