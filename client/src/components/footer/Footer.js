import React from "react";
// import MdIconPack from 'react-icons/md'
// import styled from 'styled-components'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

const style = {
  marginBottom: "20px",
}

export default class footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="row container">
          <div className="col-sm-6 leftSection">
            <p> This is my personal site as a Full-Stack Web Developer.<br></br> This application is created using React.</p>
          </div>
          <div className="col-sm-6 rightSection">
            <div style={style} className="d-flex flex-column">
              <Link  to="/" onClick={() => this.props.handlePageChange("default")}> Home </Link>
              <Link  to="/about" onClick={() => this.props.handlePageChange("About")}> Who I Am </Link>
              <Link  to="/portfolio" onClick={() => this.props.handlePageChange("Portfolio")}> My Work </Link>
              <Link  to="/contact" onClick={() => this.props.handlePageChange("Contact")}> Reach Me </Link>
              <a href="https://github.com/kozachukalex"> My Github </a>
              <a href="https://www.linkedin.com/in/alex-kozachuk-606b1915b/"> LinkedIn </a>
              <a href="https://github.com/kozachukalex/reactProfile.git"> Site Repo </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}