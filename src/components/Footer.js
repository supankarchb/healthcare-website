import React from 'react';
import { Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-success">
         
<footer className="page-footer font-small unique-color-dark pt-4">

  
  <div className="container">

   
    <ul className="list-unstyled list-inline text-center py-2">
      <li className="list-inline-item">
        <h5 className="mb-1 text-white">Register for free</h5>
      </li>
      <li className="list-inline-item">
      <Button className="rounded-pill">Sign up!</Button>
      </li>
    </ul>
  

  </div>
  

  
  <div className="footer-copyright text-center py-3 text-white">© 2020 Copyright: ABC Coaching Center
  </div>
  

</footer>

            
        </div>
    );
};

export default Footer;