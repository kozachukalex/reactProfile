import React from "react";
import { Button, Jumbotron } from 'reactstrap';
// import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";


export default class Jumbo extends React.Component {
    render() {
        return (
            <Jumbotron className="infoArea">
                <div className="jumboHeader">
                    <h1>Alex Kozachuk</h1>
                    <h1>Full-Stack Web Developer</h1>
                </div>
                <div className="ctaButtons">
                    <Button className="actionButton"> Who Am I? </Button>
                    <Button className="actionButton"> My Work </Button>
                    <Button className="actionButton"> Reach Out </Button>
                </div>
                <div className="jumboText">
                    <p className="jumboP">Creating the front-end of applications with intuitive designs and a focus on user experience and interaction.</p>
                    <p className="jumboP">Utilizing a fundamental understanding of back-end technologies and languages to bring them to life.</p>
                </div>
            </Jumbotron>
        )
    }

};