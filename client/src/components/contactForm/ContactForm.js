import React from "react";
import { } from 'reactstrap';
// import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";


export default class ContactForm extends React.Component {

    state = {
        name: '',
        email: '',
        message: ''
    }

    render() {
        return (
            <div className="infoArea">
                <h1> Contact Form</h1>
            </div>
        )
    }
}