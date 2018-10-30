import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";

class App extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    }
    else if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Portfolio") {
      return <Portfolio />;
    } else if (this.state.currentPage === "Contact") {
      return <Contact />;
    }
  };

  render() {
    return (
      <div className="App">
        <div className="mainBackground">
          <Navbar handlePageChange={this.handlePageChange} />
          <div className="pageContainer">
            {this.renderPage()}
          </div>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default App;
