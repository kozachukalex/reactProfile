import React from "react";
import { Jumbotron } from 'reactstrap';
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

const StyledJumbotron = styled(Jumbotron)`
    &&&&&& {
        height: 80vh;
        background-image: url("../images/randomBackground.jpg")
    }
`

export default (props) => (
        <StyledJumbotron>
            <h1 className="display-3">Alex Kozachuk</h1>
            <h1 className="display-5">Full Stack Developer</h1>
            <br/>
            <br/>
            <p className="lead">Creating effective, intuitive, and appealing front end designs.</p>
            <hr className="my-2" />
            <p className="lead">Utilizing a fundamental understanding of databases and routes to bring an application to life.</p>
        </StyledJumbotron>
);