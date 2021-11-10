import React from 'react';
import { Carousel } from 'react-bootstrap';

import img1 from '../../images/national-cancer-institute-rUfUd-7WW78-unsplash.jpg'
import img2 from '../../images/national-cancer-institute-egT3xtDu9DQ-unsplash.jpg'

import img3 from '../../images/national-cancer-institute-f2aDTqfnqfE-unsplash.jpg'

const Carousels = () => {
    return (
        <>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>All types of blood test</h3>
      <p>Cheaper rate,best service in the town</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Special type of Ct Scan</h3>
      <p>Cheaper rate,best service in the town</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Special Types of MRI available</h3>
      <p>Cheaper rate,best service in the town</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    );
};

export default Carousels;