import React from "react";
import { Fade } from 'reactstrap'
import "./contact.css"

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
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <Fade in={this.state.fadeIn} tag="div">
                <div className="infoArea container">

                    <h2> My Information </h2>
                    <div id="contactInformation">
                    <div id="contactHeader">
                        <h2> Alex Kozachuk </h2>
                        <h4> Full-Stack Web Developer</h4>
                    </div>
                        <br></br>
                        <br></br>
                        <a href="mailto:alex@akozachuk.com" className="contactLinks">alex@akozachuk.com</a>
                        <br></br>
                        <br></br>
                        <a href="https://github.com/kozachukalex" className="contactLinks"> My Github </a>
                        <br></br>
                        <br></br>
                        <a href="https://www.linkedin.com/in/alex-kozachuk-606b1915b/" className="contactLinks"> LinkedIn </a>
                    </div>
                </div>
            </Fade>
        )
    }

};