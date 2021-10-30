import React from 'react';
import {Button, Nav, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'
const Home = () => {
    return (
        <div className="headerStyle">
            <Navbar expand="lg" className="bg-dark navbar navbar-default navbar-fixed-top">
  <Container fluid>
    <Navbar.Brand href="#" className="text-white">Total Health Care</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0 text-white navbar navbar-default navbar-fixed-top"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
       <Link to="/homes" className="text-white m-2 items"><li><b>Home</b></li></Link>
        <Link to="/about" className="text-white m-2 items"><li ><b>About us</b></li></Link>
       <Link to="/courses" className="text-white m-2 items"><li ><b>Services</b></li></Link>
       <Link to="/showingDoctorsData" className="text-white m-2 items"><li ><b>Doctors</b></li></Link>


       <Link to="/contracts" className="text-white m-2 items"><li><b>Find us</b></li></Link>
       <Link to="/login" className="text-white m-2 items"><li><b>Login</b></li></Link>


       <Button>Log Out</Button>

        
    
      </Nav>

    </Navbar.Collapse>
  </Container>
</Navbar>     


 </div>
     
    );
};

export default Home;