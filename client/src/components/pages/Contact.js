import React from "react";
import {Fade} from 'reactstrap'
import Jumbotron from "../jumbotron"

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
        </Fade>
        )
    }

};