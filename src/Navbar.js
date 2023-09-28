
import React, { Component } from "react";
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Home from "./Pages/Home";
import News from "./Pages/News"
import editbar from './Styles/editbar.css';
// import Home from "../src/Pages/Home";

function Bar() {
  return (
    <div>
    <Navbar className="appbar" expand="lg" >
      <Container>

        <Navbar.Brand  as={Link} to= "/">Security Practices</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  as={Link} to="/" className="titles">Home</Nav.Link>
            <NavDropdown title="Content" id="basic-nav-dropdown">
              <NavDropdown.Item  as={Link} to="/News">News</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Blogs">Blogs</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Podcasts">Podcasts</NavDropdown.Item>
              <Nav.Link as={Link} to="/Resources">Resources</Nav.Link>
              <Nav.Link as={Link} to="/gamification">Gamification</Nav.Link>


            </NavDropdown>
            <Nav.Link as={Link} to="/Resources">Resources</Nav.Link>
              {/* <NavDropdown.Item as={Link} to="/Videos">Informational Videos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Discussions
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Security Tools</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                White Papers
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Threats</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Study Guides</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">Glossary</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link as={Link} to="/gamification">Gamification</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  );
}

export default Bar;