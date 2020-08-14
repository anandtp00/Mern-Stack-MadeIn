
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

export default class AppNavbar extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="md-5">
          <Container>
            <Link to="/" className="navbar-brand">MadeIn</Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} />
            <Nav className="ml-auto" navbar>
              <NavItem>
              <NavbarText> <Link to="/services">Services</Link></NavbarText>
              </NavItem>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

