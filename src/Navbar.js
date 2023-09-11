// import index from './Styles/index.css'

// function Navbar() {
//     return (         
//         <>
//         <nav className="navbar">
//             <h1 className="navbar h1" align="center">Security Practices</h1>
//             <a href="/about">About</a>
//             <a href="/resources">Resources</a>
//             <a href="/news">News</a>
//             <a href="/blogs">Blogs</a>
//             <a href="/games">Gamification</a> 

//         </nav>
//         </>
//      );
// }
 
// export default Navbar;


import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import editbar from './Styles/editbar.css';

function Bar() {
  return (
    <Navbar className="appbar" expand="lg" >
      <Container>
        <Navbar.Brand  href="#home">Security Practices</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="titles">Home</Nav.Link>
            {/*  */}
            <NavDropdown  title="About" id="basic-nav-dropdown">
              <NavDropdown.Item  href="#action/3.1">What is security?</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Who this website is for?
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown  title="Resources" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Security Tools</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Glossary
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Informational Videos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                White Papers
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Threats</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Podcasts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">Study Guides</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">Discussions</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">News</Nav.Link>
            <Nav.Link href="#link">Blogs</Nav.Link>
            <Nav.Link href="#link">Gamification</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Bar;