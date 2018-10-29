import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar"
import Jumbotron from "./components/jumbotron"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Jumbotron} />
        </div>
      </Router>
    );
  }
}

export default App;
