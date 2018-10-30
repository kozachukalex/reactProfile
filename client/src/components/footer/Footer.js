import React from "react";
// import MdIconPack from 'react-icons/md'
// import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

export default class footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="row container">
          <div className="col-sm-6 leftSection">
            <p> test one </p>
          </div>
          <div className="col-sm-6 rightSection">
            <p> test two </p>
          </div>
        </div>
      </div>
    );
  }
}