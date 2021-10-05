import React from 'react';
import {Button, FormControl, Nav, Form, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Home = () => {
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
       <Link to="/homes" className="text-white m-2"><li className=""><b>Home</b></li></Link>
        <Link to="/abouts" className="text-white m-2"><li className=""><b>About us</b></li></Link>
       <Link to="/courses" className="text-white m-2"><li className=""><b>Courses</b></li></Link>

       <Link to="/contract" className="text-white m-2"><li className=""><b>Find us</b></li></Link>

        
    
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

export default Home;