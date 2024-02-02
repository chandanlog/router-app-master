import React from 'react';
import { Carousel } from 'react-bootstrap';
import firstImg from "../Images/about.png"
import secondImg from "../Images/game.png"

const CarouselComponent = () => {
    const carouselStyle = {
        width: '100%', // Set the width of the carousel
        height: '422px', // Set the height of the carousel
        overflow: 'hidden', // Optional: Hide any overflow content
      };
  return (
    <Carousel style={carouselStyle}>
      <Carousel.Item>
        <img
          src={firstImg} // Replace with your image URL
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={secondImg} // Replace with your image URL
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
