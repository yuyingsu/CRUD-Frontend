import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

class Home extends Component {

  render() {
    return (
        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">School Management</NavbarBrand>
            <Nav className="mr-auto" navbar>
              <NavItem>
              <NavLink tag={Link} to="/campuses">Campuses</NavLink>
              </NavItem>
              <NavItem>
              <NavLink tag={Link} to="/students">Students</NavLink>
              </NavItem>
              <NavItem>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Home;