import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import MdIconPack from 'react-icons/md'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

//example of styled-component for future uses
const StyledNavbar = styled(Navbar)`
    &&&&&&{
        background-color: black !important;
    }
`
const StyledNavItem = styled(NavItem)`
    &&&&&&{
        margin-right: 30px;
        margin-left: 30px;
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
  render(props) {
    return (
      <div>
        <StyledNavbar
          expand="md"
        >
          <NavbarBrand
            onClick={() => this.props.handlePageChange("Home")}
            className={this.currentPage === "Home" ? "active" : "nav-link"}>
            <img className="logo" src="../images/logoImage.png" alt="logo"></img>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle}>
            <StyledMdIconPackMdMenu size={40} />
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <StyledNavItem
                onClick={() => this.props.handlePageChange("About")}
                className={this.props.currentPage === "About" ? "active" : "deactive"}>
                <NavLink>About</NavLink>
              </StyledNavItem>
              <StyledNavItem
                onClick={() => this.props.handlePageChange("Portfolio")}
                className={this.props.currentPage === "Portfolio" ? "active" : "deactive"}>
                <NavLink>Portfolio</NavLink>
              </StyledNavItem>
              <StyledNavItem
                onClick={() => this.props.handlePageChange("Contact")}
                className={this.props.currentPage === "Contact" ? "active" : "deactive"}>
                <NavLink>Contact</NavLink>
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