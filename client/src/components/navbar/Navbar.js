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
      isOpen: false
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
        <StyledNavbar expand="md">
          <NavbarBrand href="/"><img className="logo" src="../images/logoImage.png" alt="logo"></img></NavbarBrand>
          <NavbarToggler onClick={this.toggle}>
          <StyledMdIconPackMdMenu size={40} />
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <StyledNavItem>
                <NavLink href="/about">About</NavLink>
              </StyledNavItem>
              <StyledNavItem>
                <NavLink href="/portfolio">Portfolio</NavLink>
              </StyledNavItem>
              <StyledNavItem>
                <NavLink href="/contact">Contact</NavLink>
              </StyledNavItem>
            </Nav>
            <NavLink href="https://github.com/kozachukalex">Github</NavLink>
            <NavLink href="/">LinkedIn</NavLink>
          </Collapse>
        </StyledNavbar>
      </div>
    );
  }
}