import React from 'react';
import {Button, FormControl, Nav, Form, Container, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="headerStyle">
            <Navbar expand="lg" className="bg-dark">
  <Container fluid>
    <Navbar.Brand href="#" className="text-white">ABC Coaching Center</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0 text-white"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1" className="text-white">Home</Nav.Link>
        <Nav.Link href="#action2" className="text-white">Services</Nav.Link>
        <Nav.Link href="#action3" className="text-white">About us</Nav.Link>
        <Nav.Link href="#action4" className="text-white">Contract us</Nav.Link>

        
    
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;