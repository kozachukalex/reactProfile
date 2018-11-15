import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";

class App extends Component {
  state = {
    currentPage: ""
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <Router>
        <div className="App mainBackground">
            <Navbar  handlePageChange = {this.handlePageChange} currentPage={this.state.currentPage}/>
            <div className="pageContainer">
                <Route exact path="/" component={Home} handlePageChange = {this.handlePageChange} currentPage={this.state.currentPage}/>
                <Route exact path="/about" component={About} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/contact" component={Contact} />
            </div>
            <Footer></Footer>
        </div>
        </Router>
    );
  }
}

export default App;
