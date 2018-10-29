import React from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink} from 'reactstrap';
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


export default class Example extends React.Component {
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
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <StyledNavItem>
                  <NavLink href="/about">About</NavLink>
                </StyledNavItem>
                <StyledNavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">Portfolio</NavLink>
                </StyledNavItem>
                <StyledNavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">Contact</NavLink>
                </StyledNavItem>
              </Nav>
            </Collapse>
          </StyledNavbar>
        </div>
      );
    }
  }