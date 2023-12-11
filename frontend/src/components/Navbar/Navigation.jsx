import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navigation.css'

const Navigation = () => {
  return (
    <Navbar expand="lg"  id='navbar'>
      <Container>
        <Navbar.Brand href="#home">Magate-Homes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link id='nav' href="/">Home</Nav.Link>
            <Nav.Link id='nav'  href="/contactUs">Contact Us</Nav.Link>
            <Nav.Link id='nav' href="#link">Ourhomes</Nav.Link>
            <NavDropdown id='nav' title="About us" >
              <NavDropdown.Item href="#action/3.1">Career</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Locations
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Our Company</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation