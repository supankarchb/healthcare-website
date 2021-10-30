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
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    );
};

export default Carousels;