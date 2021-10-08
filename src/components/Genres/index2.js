// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import "./style.css";

// const Genres = () => {

//     const [ comedy, setComedy ] = useState([]);
//     const [ action, setAction ] = useState([]);
//     const [ romance, setRomance ] = useState([]);

//     const fetchData = () => {

        
//         const options1 = {
//             method: 'GET',
//             url: 'https://imdb8.p.rapidapi.com/auto-complete',
//             params: {q: 'game of thrones'},
//             headers: {
//                 'x-rapidapi-host': 'imdb8.p.rapidapi.com',
//                 'x-rapidapi-key': '06de7c36d9msh9c779a3dc13beccp13f8f8jsn548b5609e348'
//             }
//         };
//         const options1Act = axios.request(options1);
        
//         const options2 = {
//             method: 'GET',
//             url: 'https://imdb8.p.rapidapi.com/auto-complete',
//             params: {q: 'action'},
//             headers: {
//                 'x-rapidapi-host': 'imdb8.p.rapidapi.com',
//                 'x-rapidapi-key': '06de7c36d9msh9c779a3dc13beccp13f8f8jsn548b5609e348'
//             }
//         };
//         const options2Act = axios.request(options2);
        
//         const options3 = {
//             method: 'GET',
//             url: 'https://imdb8.p.rapidapi.com/auto-complete',
//             params: {q: 'romance'},
//             headers: {
//                 'x-rapidapi-host': 'imdb8.p.rapidapi.com',
//                 'x-rapidapi-key': '06de7c36d9msh9c779a3dc13beccp13f8f8jsn548b5609e348'
//             }
//         };
//         const options3Act = axios.request(options3);
        
//         axios.all([options1Act, options2Act, options3Act]).then(axios.spread((data1, data2, data3) => {

//             console.log(data1.data.d);
//             console.log(data2.data.d);
//             console.log(data3.data.d);
            
               // const comedyHull = allData[0].data.d;
               // const actionHull = allData[1].data.d;
               // const romanceHull = allData[2].data.d;

               // setComedy(...comedy );
               // setAction(...action );
               // setRomance(...romance );
              
          //   setComedy({...comedy, comedyHull });
          //   setAction({...action, actionHull });
          //   setRomance({...romance, romanceHull });

//         })).catch(error => console.error(error));

//     }
//     console.log(action);
//     console.log(romance);
//     console.log(comedy);

//     console.log(action.actionHull);
//     console.log(romance.romanceHull);
//     console.log(comedy.comedyHull);

//     useEffect(() => {
//         fetchData()
//     }, [results]);

//     const firstOne = action.actionHull[0];
//     const secondOne = action.actionHull[1];
//     const thirdOne = action.actionHull[3];

// return (
//             <div className="genreDivs">
//             <div className="genre action">
//                  <div className="leftBox">
//                     <h1>Comedy</h1>
//                     <div className="imgDiv">
//                     <img alt="title2" src="" />
//                          <p>TITLE HERE</p>
//                     </div>
//                     <div className="imgDiv">
//                     <img alt="title2" src="" />
//                          <p>TITLE HERE</p>
//                     </div>
//                     <div className="imgDiv">
//                     <img alt="title2" src="" />
//                          <p>TITLE HERE</p>
//                     </div>
//                     <div className="imgDiv">
//                     <img alt="title2" src="" />
//                          <p>TITLE HERE</p>
//                     </div>
//                     <div className="imgDiv">
//                     <img alt="title2" src="" />
//                          <p>TITLE HERE</p>
//                     </div>
//                     </div>
//                 </div>
//                 <div className="genre action">
//                  <div className="leftBox">
//                     <h1>Action</h1>
//                     <div className="imgDiv">
//                     <img alt="title2" src="" />
//                          <p>TITLE HERE</p>
//                     </div>
//                     <div className="imgDiv">
//                     <img alt="title2" src="" />
//                          <p>TITLE HERE</p>
//                     </div>
//                     <div className="imgDiv">
//                     <img alt="title2" src="" />
//                          <p>TITLE HERE</p>
//                     </div>
//                     <div className="imgDiv">
//                     <img alt="title2" src="" />
//                          <p>TITLE HERE</p>
//                     </div>
//                     <div className="imgDiv">
//                     <img alt="title2" src="" />
//                          <p>TITLE HERE</p>
//                     </div>
//                     </div>
//                 </div>
//                 <div className="genre action">
//                  <div className="leftBox">
//                     <h1>Romance</h1>
//                     <div className="imgDiv">
//                     <img alt="title2" src="" />
//                          <p>TITLE HERE</p>
//                     </div>
//                     <div className="imgDiv">
//                     <img alt="title2" src="" />
//                          <p>TITLE HERE</p>
//                     </div>
//                     <div className="imgDiv">
//                     <img alt="title2" src="" />
//                          <p>TITLE HERE</p>
//                     </div>
//                     <div className="imgDiv">
//                     <img alt="title2" src="" />
//                          <p>TITLE HERE</p>
//                     </div>
//                     <div className="imgDiv">
//                     <img alt="title2" src="" />
//                          <p>TITLE HERE</p>
//                     </div>
//                     </div>
//                 </div>
//                 <div className="genre action">
//                  <div className="leftBox">
//                     <h1>Action</h1>
//                     <div className="imgDiv">
//                           <img alt="title2" src="" />
//                          <p>TITLE HERE</p>
//                     </div>
//                     <div className="imgDiv">
//                         <img alt="title2" src="" />
//                         <p>TITLE HERE</p>
//                     </div>
//                     <div className="imgDiv">
//                         <img alt="title3" src="" />
//                             <p>TITLE HERE</p>
//                     </div>
//                     <div className="imgDiv">
//                             <img alt="title4" src="" />
//                             <p>TITLE HERE</p>
//                     </div>
//                     <div className="imgDiv">
//                             <img alt="title5" src="" />
//                         <p>TITLE HERE</p>
//                     </div>
//                     </div>
//                 </div>
//             </div>
            
// )
// }

// export default Genres;








// import React, { Component } from "react";
// import axios from "axios";

// class Action extends Component {

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
//             params: {q: 'action'},
//             headers: {
//                 'x-rapidapi-host': 'imdb8.p.rapidapi.com',
//                 'x-rapidapi-key': '06de7c36d9msh9c779a3dc13beccp13f8f8jsn548b5609e348'
//             }
//         };

//         axios.request(options).then((response) => {
                           
            // for (var i =0; i < Math.min(response.data.d.length, 5); i++) {
            //     const result = response.data.d[i];
            // }

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
//                     <h1>Action</h1>
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

// export default Action;







// import React from "react";
// import "./style.css";
// import axios from "axios";
// import Action from "../GenreSections/Action";
// import Horror from "../GenreSections/Horror";
// import Mystery from "../GenreSections/Mystery";
// import Romance from "../GenreSections/Romance";

// function Genres() {
//     return (
//         <div className="genreDivs">
//             <Action />
//              {/* <Horror />
//              <Mystery />
//             <Romance /> */}
//         </div>
//     )
// }

// export default Genres;