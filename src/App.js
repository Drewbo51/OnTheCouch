import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Jumbotron from "./components/Jumbotron";
import Playing from "./components/Playing";
import Navbar from "./components/Navbar";
import Genres from "./components/Genres";
import SearchMovieContainer from "./components/SearchMovieContainer";
import About from "./components/About";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div className="App-header">
        <Jumbotron />
        <Navbar />
        <Route exact path="/" component={About} />
        <Route exact path="/searchReviews" component={SearchMovieContainer} />
        <Route exact path="/genres" component={Genres} />
        <Route exact path="/playing" component={Playing} />
<<<<<<< HEAD
        <Footer />
=======
      <Footer/>
>>>>>>> 2c77a8fd390631f641746b3a1b12f1cb47b959fd
      </div>
    </Router>
  );
}

export default App;
