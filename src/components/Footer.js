import React from 'react';
import { ButtonGroup,Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-success">
         
<footer className="page-footer font-small unique-color-dark pt-4">

  
  <div className="container">

   
    <ul className="list-unstyled list-inline text-center py-2">
      <li className="list-inline-item">
        <h5 className="mb-1">Register for free</h5>
      </li>
      <li className="list-inline-item">
      <Button className="btn btn-outline-white btn-rounded">sign up!</Button>
      </li>
    </ul>
  

  </div>
  

  
  <div className="footer-copyright text-center py-3">© 2020 Copyright: ABC Coaching Center
  </div>
  

</footer>

            
        </div>
    );
};

export default Footer;