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
    }
    
  componentDidMount() {
    window.scrollTo(0, 0)
  }
    render() {
        return (
            <Fade in={this.state.fadeIn} tag="div">
                <div className="contactBox container">
                contact me
                </div>
            </Fade>
        )
    }

};