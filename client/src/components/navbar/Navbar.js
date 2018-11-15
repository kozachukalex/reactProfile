import React from "react";
import {
  Collapse,
  DropdownItem,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Link } from "react-router-dom"
import MdIconPack from 'react-icons/md'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import logo from "../../images/akLogo.png"

//example of styled-component for future uses

const StyledMdIconPackMdMenu = styled(MdIconPack.MdMenu)`
    &&&&& {
      color: #fff;
      size: 48;
    }
`


export default class navbar extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {

    return (
      <div>
        <Navbar
          className="navFixed shadow p-3 mb-5"
          expand="md"
        >
          <div className="pushLogo">
            <Link to="/"                  onClick={() => {
                    this.setState({
                      isOpen: false
                    })
                  }}>
              <img className="logo" src={logo} alt="logo" onClick={() => this.props.handlePageChange("default")}></img>
            </Link>
          </div>
          <NavbarToggler onClick={this.toggle}>
            <StyledMdIconPackMdMenu size={40} />
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto navFlexAdjust" navbar>
              <DropdownItem divider />
              <NavItem
                onClick={() => this.props.handlePageChange("About")}
                className={this.props.currentPage === "About" ? "active" : "deactive"}>
                <Link to="/about"
                  onClick={() => {
                    this.setState({
                      isOpen: false
                    })
                  }}>
                  Who I Am
                  </Link>
              </NavItem>
              <NavItem
                onClick={() => this.props.handlePageChange("Portfolio")}
                className={this.props.currentPage === "Portfolio" ? "active" : "deactive"}>
                <Link
                  to="/portfolio"
                  onClick={() => {
                    this.setState({
                      isOpen: false
                    })
                  }}>
                  My Work
                </Link>
              </NavItem>
              <NavItem
                onClick={() => this.props.handlePageChange("Contact")}
                className={this.props.currentPage === "Contact" ? "active" : "deactive"}>
                <Link to="/contact"
                  onClick={() => {
                    this.setState({
                      isOpen: false
                    })
                  }}>
                  Reach Me
                  </Link>
              </NavItem>
            </Nav>
              <NavLink
                className="deactive"
                href="https://github.com/kozachukalex">Github</NavLink>
              <NavLink
                className="deactive"
                href="https://www.linkedin.com/in/alex-kozachuk-606b1915b/">LinkedIn</NavLink>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}