import React from "react";
import "../css/slider.css";
import { Carousel } from "react-bootstrap";
import { Slides } from "../config/slideImages";

const Slider = () => {
  return (
    <div className="slider">
      <Carousel className="carousel">
        {Slides.map((slide) => (
          <Carousel.Item interval={3000}>
            <img src={slide} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
