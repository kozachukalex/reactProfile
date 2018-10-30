import React from "react";
import {Fade} from 'reactstrap'
import ContactForm from "../contactForm"

export default class Contact extends React.Component {
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
            <ContactForm />
        </Fade>
        )
    }

};