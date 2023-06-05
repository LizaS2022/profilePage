import React, { Component } from 'react';
import {Navbar, Nav,Container} from 'react-bootstrap'
import {animateScroll} from 'react-scroll'

export default class Header extends Component {
  scrollTop = () => {
    animateScroll.scrollTop ();
  }
  render() {
    return (
      <div>
          <Navbar bg="primary" variant="dark" expand="lg" fixed='top'>
        <Container>
          <Navbar.Brand href="#home">Liz Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav' className="justify-content-end">
          <Nav className="ml-auto">
          <Nav.Item as="li">
            <Nav.Link href="#about">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
            <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
            <Nav.Link href="#resume">Resume</Nav.Link>
            </Nav.Item>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    )
  }
}
