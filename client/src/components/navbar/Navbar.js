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

//example of styled-component for future uses
const StyledNavbar = styled(Navbar)`
    &&&&&&{
        background-color: rgb(5, 172, 158) !important;
    }
`
const StyledNavItem = styled(NavItem)`
    &&&&&&{
        margin-right: 30px;
        margin-left: 30px;
        padding: 8px 16px;
    }
`

const StyledMdIconPackMdMenu = styled(MdIconPack.MdMenu)`
    &&&&& {
      color: white;
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
        <StyledNavbar
          expand="md"
        >
          <div className="pushLogo">
            <Link to="/">
              <img className="logo" src="../images/logoImage.png" alt="logo"></img>
            </Link>
          </div>
          <NavbarToggler onClick={this.toggle}>
            <StyledMdIconPackMdMenu size={40} />
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <DropdownItem divider />
              <StyledNavItem
                onClick={() => this.props.handlePageChange("About")}
                className={this.props.currentPage === "About" ? "active" : "deactive"}>
                <Link to="/about"
                  onClick={() => {
                    this.setState({
                      isOpen: false
                    })
                  }}>
                  About
                  </Link>
              </StyledNavItem>
              <StyledNavItem
                onClick={() => this.props.handlePageChange("Portfolio")}
                className={this.props.currentPage === "Portfolio" ? "active" : "deactive"}>
                <Link
                  to="/portfolio"
                  onClick={() => {
                    this.setState({
                      isOpen: false
                    })
                  }}>
                  Portfolio
                </Link>
              </StyledNavItem>
              <StyledNavItem
                onClick={() => this.props.handlePageChange("Contact")}
                className={this.props.currentPage === "Contact" ? "active" : "deactive"}>
                <Link to="/contact"
                  onClick={() => {
                    this.setState({
                      isOpen: false
                    })
                  }}>
                  Contact
                  </Link>
              </StyledNavItem>
            </Nav>
            <NavLink
              className="deactive"
              href="https://github.com/kozachukalex">Github</NavLink>
            <NavLink
              className="pushIt deactive"
              href="/">LinkedIn</NavLink>
          </Collapse>
        </StyledNavbar>
      </div>
    );
  }
}