import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

export default class Bio extends React.Component {
  render() {
    return (
      <div className="infoArea">
        <div className="container" id="bioText">
          <h2> Who I Am...</h2>
          <div id="bioDescrip">
            <p> Self-motivated and driven full-stack web-developer with a passion for learning front-end development. My experience as an EMT has given me an invaluable skill in time management and critical thinking. Allowing myself to remain calm and collective under pressure. After practicing as an EMT, I went on to become a Regional Wellness Ambassador Trainer for Rite Aid Pharmacy where I trained employees in business to business and business to community relationships for five years throughout North Carolina.</p>
            <br></br>
            <p> I successfully completed the University of North Carolina Full-Stack Coding Bootcamp in November 2018. I have an interest in furthering my skills in front-end technoligies and languages. I enjoy client-facing design and creating something a user can interact with.</p>
          </div>
        </div>
      </div>
    );
  }
}