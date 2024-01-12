import React, { useState, useEffect } from 'react';
import './add.css';
import add1 from './img/add1.svg';
import add2 from './img/add2.svg';
import add3 from './img/add3.svg';

const Add = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    add1,
    add2,
    add3
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000);
    return () => clearInterval(intervalId);
  }, [slides.length]);
  

  return (
    <div id="slideshow" className="ad">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide}
          alt={`Add ${index + 1}`}
          style={{
            display: index === currentSlide ? 'block' : 'none',
            borderRadius: '20px'
          }}               
        />
      ))}
    </div>
  );
};

export default Add;
