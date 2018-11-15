import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

import unityImg from "../../images/unityImg.PNG";
import artistotleImg from "../../images/aristotleImg.PNG";
import foodLoversImg from "../../images/foodLoversImg.PNG";


export default class Portfolio extends React.Component {

    render() {
        return (
            <div className="infoArea container">
                <h1> My Work </h1>
                <div className="projectFlex">
                    <div className="projectContainer">
                        <img className="projectImage" src={unityImg} alt="unityImg"></img>
                        <p> Stock Picker App that allows a user or advisor to sign up,log in, see real-time data on specific stocks and share information. This is accomplished through React, MongoDB, Mongoose, Passport, React Materialize,React Router, custom CSS, and more. Application was created with mobile responsiveness.</p>
                        <p> Github Repo: <a href="https://github.com/unctarheel87/unity.git">Unity</a></p>
                        <p> <a href="https://mighty-escarpment-81668.herokuapp.com/"> Heroku Link </a></p>
                    </div>
                </div>
                <div className="projectFlex">
                    <div className="projectContainer">
                        <img className="projectImage" src={artistotleImg} alt="artistotleImg"></img>
                        <p> Allows simple register and log in that allows users to create and share simple lesson plans. This project contains mySQL, Sequelize, Handlebars, and Materialize.</p>
                        <p> Github Repo: <a href="https://github.com/kozachukalex/Project2_Team7.git"> Aristotle </a></p>
                        <p> <a href="https://secret-gorge-60402.herokuapp.com/"> Heroku Link </a></p>
                    </div>
                    <div className="projectContainer">
                        <img className="projectImage" src={foodLoversImg} alt="foodLoversImg"></img>
                        <p> Food Lovers uses a RESTful API to find information about restaurants in the Raleigh area related to your search. This application uses a RESTful API(Zomato), Firebase Authentication, Google Authentication, Firebase Database, and Materialize. </p>
                        <p> Github Repo: <a href="https://github.com/kozachukalex/Food-Lovers.git">Food Lovers </a></p>
                        <p> <a href="https://kozachukalex.github.io/Food-Lovers/"> Github Pages Link</a></p>
                    </div>
                </div>
            </div>
        )
    }
};