import React from 'react'
import "../Styles/Navigation.css"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigation = () => {
  return (
    <div>
         <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="brand__name">GrittlyStudent</Navbar.Brand>
        <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">ARTICLES</Nav.Link>
            <Nav.Link href="#pricing">BOOKS</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">ARTICLES</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                BOOKS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">ABOUT</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link href="#deets">ABOUT ME</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              CONTACT ME
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </div>
  )
}

export default Navigation