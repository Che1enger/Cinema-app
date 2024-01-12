import React from 'react';
import './about.css'
import Corn from './img/Popcorn.svg'

const About = () => (
  <div>
    <div className="title">About us</div>
    <div className="about">
      <div className="texts">
        <p>
          Welcome to Cinema Cinema! We are pleased to welcome you to our cinema, where you can enjoy the best films in a cozy and comfortable atmosphere.
        </p>
        <p>
          Our cinema was founded in 2005 and has since become one of the most popular places for film lovers. We strive to offer our viewers the best service and quality film production. Our team includes experienced professionals who constantly follow the trends of cinema and select for you the best films from the world film industry.
        </p>
        <p>
          In our cinema, you can enjoy films in high-quality sound and picture, thanks to the use of advanced film production technologies. We have several cinema halls that allow us to show several films of different genres at the same time.
        </p>
        <p>
          We also offer our viewers the opportunity to order movie tickets online through our website, which allows them to save time on going to the box office and choose a convenient seat in the cinema hall in advance.
        </p>
        <p>
          We always try to make our film event as comfortable and convenient as possible for our viewers.
        </p>
        <p>
          Our cinema has cinema lounges where you can purchase drinks and popcorn to enjoy the movie to the fullest. We hope that your visit to our cinema will leave you with vivid impressions and you will return to us again and again!
        </p>
      </div>
      <div className="AboutImage">
        <img src={Corn} alt="Popcorn" />
      </div>
    </div>
  </div>
);

export default About;
