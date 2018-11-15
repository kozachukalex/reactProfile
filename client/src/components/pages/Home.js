import React from "react";
import { Button, Fade } from 'reactstrap';
import Jumbotron from "../jumbotron";
import WordScramble from "../wordScramble"
import "./home.css";

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
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <Fade in={this.state.fadeIn} tag="div">
                <div className="infoArea2">
                    <WordScramble />
                    <Jumbotron handlePageChange={this.props.handlePageChange} />
                    <Button id="reloadButton" href="/"> Replay Animation </Button>
                </div>
            </Fade>
        )
    }

};