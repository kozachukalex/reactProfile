import React from "react";
import { Jumbotron } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";


export default class Jumbo extends React.Component {

    render() {
        return (
            <Jumbotron>
                <div className="jumboText">
                <h5> <i>Full-Stack Web Developer</i></h5>
                    <p className="jumboP">Creating the front-end of applications with intuitive designs and a focus on user experience and interaction.</p>
                    <br></br>
                    <p className="jumboP">Utilizing a fundamental understanding of back-end technologies and languages to bring them to life.</p>
                </div>
            </Jumbotron>
        )
    }

};