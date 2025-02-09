import React from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button'
import Logo from '../assets/images/rsz_logoback.png'

const header = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
                <NavDropdown title="Services" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.2">Website Design</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">WordPress Theme Development</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">WordPress Plugin Development</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">SEO and Responsive Website</NavDropdown.Item>
                </NavDropdown>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Button className='btn head-btn'>Contact Us</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default header
