import React from "react";
// import { Jumbotron } from 'reactstrap';
// import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";


export default class Portfolio extends React.Component {
    render() {
        return (
            <div className="infoArea">
                <h1> My Work </h1>
                <div>
                    <div>
                        <p> Github Repo: <a href="https://github.com/unctarheel87/unity.git">Unity</a></p>
                        <p> <a href="https://mighty-escarpment-81668.herokuapp.com/"> Heroku Link </a></p>
                    </div>
                    <div>
                        <p> Github Repo: <a href="https://github.com/kozachukalex/Project2_Team7.git"> Aristotle </a></p>
                        <p> <a href="https://secret-gorge-60402.herokuapp.com/"> Heroku Link </a></p>
                    </div>
                    <div>
                        <p> Github Repo: <a href="https://github.com/kozachukalex/Food-Lovers.git">Food Lovers </a></p>
                        <p> <a href=""> Heroku Link</a></p>
                    </div>
                </div>
            </div>
        )
    }
};