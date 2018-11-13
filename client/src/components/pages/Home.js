import React from "react";
import { Fade } from 'reactstrap'
import Jumbotron from "../jumbotron"
import html from "../../images/htmlAltered.png"
import css from "../../images/cssAltered.png"
import js from "../../images/jsAltered.png"
import sql from "../../images/sqlAltered.png"
import mongo from "../../images/mongoAltered.png"
import reactIcon from "../../images/reactAltered.png"
import "./home.css"

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = { fadeIn: true };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            fadeIn: true
        });
    }

    componentDidMount() {
        this.toggle();
    }

    render() {
        return (
            <Fade in={this.state.fadeIn} tag="div">
                <Jumbotron />
                <div className="techArea">
                    <h1 className="bioHeader"> Technologies and Languages </h1>
                    <div className="flexAdjust container">
                        <div className="techText">
                            <p> Experience with multiple front-end frameworks including:</p>
                                <ul>
                                    <li className="listText">Bootstrap</li>
                                    <li className="listText">Materialize</li>
                                    <li className="listText">Material UI</li>
                                    <li className="listText">Spectre.css</li>
                                    <li className="listText">Ant Design</li>
                                </ul>
                        </div>
                        <div className="techIconContainer">
                            <div className="hexes topHex">
                                <div class="hexagon"><img src={html} alt="htmlIcon" className="techIcon"></img></div>
                                <div class="hexagon"><img src={css} alt="cssIcon" className="techIcon"></img></div>
                                <div class="hexagon"><img src={js} alt="jsIcon" className="techIcon"></img></div>
                            </div>
                            <div className="hexes middleHex">
                                <div class="hexagon"><img src={sql} alt="sqlIcon" className="techIcon"></img></div>
                                <div class="hexagon"><img src={mongo} alt="mongoIcon" className="techIcon"></img></div>
                            </div>
                            <div className="hexes bottomHex">
                                <div class="hexagon"><img src={reactIcon} alt="reactIcon" className="techIcon"></img></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        )
    }

};