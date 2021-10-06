import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Jumbotron from "./components/Jumbotron";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Genres from "./components/Genres";


function App() {
  return (
    <Router>
        <Jumbotron />
        <Navbar />
        <Route exact path="/" component={Home} />
        
        <Route exact path="/genres" component={Genres} />
        {/* <Route exact path="/about" component={About} /> */}
    </Router>
  );
}

export default App;
