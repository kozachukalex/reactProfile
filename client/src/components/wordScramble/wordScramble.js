import React from "react";
import "./index.css";
import "./animationQuery.css"

export default () => (
    <div id="wordScramble">
        <div className="d-flex flex-row justify-content-around">
            <div id="css"> CSS </div>
            <div id="recur"> RECURSIVE </div>
            <div id="brows"> BROWSER</div>
        </div>
        <div className="d-flex flex-row justify-content-around">
            <div id="javs"> JAVASCRIPT</div>
            <div id="sql"> <span className="colorChange" id="my">MY</span>SQL </div>
            <div id="compon"> COMPONENT </div>
        </div>
        <div className="d-flex flex-row justify-content-around">
            <div id="fntcn"> FUNCTIO<span className="colorChange" id="n">N</span>S</div>
            <div id="rct"> RE<span className="colorChange" id="firstA">A</span>CT </div>
            <div id="mern"><span className="colorChange" id="me">ME</span>RN </div>
        </div>
        <div className="d-flex flex-row justify-content-around">
            <div id="mobile"> MOB<span className="colorChange" id="i">I</span>LE </div>
            <div id="responsive"> RE<span className="colorChange" id="s">S</span>PONSIVE</div>

            <div id="node"> NODE </div>

        </div>
        <div className="d-flex flex-row justify-content-center">
            <div id="vari"> VARI
            <span className="colorChange" id="secondA">A</span>B
            <span className="colorChange" id='L'>L</span>E</div>
            <div id="xpress"><span className="colorChange" id="ex"> EX</span>PRESS </div>
        </div>
        <div className="d-flex flex-row justify-content-around">
            <div id="mongo"> MONGODB</div>
            <div id="html"> HTML </div>
            <div id="cnstnt"> CONSTANT</div>
        </div>
    </div>
)