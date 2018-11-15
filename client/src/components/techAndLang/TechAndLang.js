import React from "react";
import "./index.css";

import html from "../../images/htmlAltered.png";
import css from "../../images/cssAltered.png";
import js from "../../images/jsAltered.png";
import node from "../../images/nodeAltered.png";
import exprs from "../../images/expressAltered.png";
import sql from "../../images/sqlAltered.png";
import mongo from "../../images/mongoAltered.png";
import reactIcon from "../../images/reactAltered.png";

export default () => (
    <div className="techArea">
        <h1 id="techHeader"> Technologies and Languages </h1>
        <div className="flexAdjust">
            <div className="techText">
                <p id="listHeader"> Experience with multiple front-end frameworks including:</p>
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
                    <div class="hexagon"><img src={node} alt="nodeIcon" className="techIcon"></img></div>
                    <div class="hexagon"><img src={exprs} alt="exprsIcon" className="techIcon"></img></div>
                    <div class="hexagon"><img src={reactIcon} alt="reactIcon" className="techIcon"></img></div>
                </div>
            </div>
        </div>
    </div>
)