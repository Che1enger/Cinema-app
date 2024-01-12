import React from 'react';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import './FilmCard.css'
import Cart from './img/cart.svg'

const FilmCard = (props) => {
    const {movieName,Screen,progressValue,Place,Subs,Language,imageSrc} = props;
    const [calculatedValue, setCalculatedValue] = useState(100 - progressValue);


    useEffect(() => {
      const progressBars = document.querySelectorAll('.progress-bar');
  
      progressBars.forEach(progressBar => {
        const progress = progressBar.querySelector('progress');
        const gradientValue = progress.value;
  
        progressBar.style.background = `radial-gradient(closest-side, white 65%, transparent 50% 100%), conic-gradient(rgb(189, 147, 112) ${gradientValue}%, rgb(210, 210, 210) 0)`;
      });
  
      setCalculatedValue(100 - progressValue);
    }, [progressValue]);
  return (
    <div className="wrap">
      <div className="poster">
        <img className="image" src={imageSrc} alt="Movie Poster" />
      </div>

      <div className="info">
        <p>{movieName}</p>
        <div className="screen">Screen: {Screen}</div>
        <div className="name_footer">
          <div className="available">Available:</div>
          <div className="hall_name">Hall:</div>
          <div className="language_name">Language:</div>
          <div className="subtitles_name">Subtitles:</div>
        </div>

        <div className="card_footer">
          <div className="mesta">
            <div className="progress-bar">
              <progress value={progressValue} min="0" max="100" style={{ visibility: 'hidden', height: '0', width: '0' }}></progress>
            </div>
            <div className="free">{calculatedValue} pcs.</div>
          </div>
          <div className="halls">
            <div className="hall1">{Place}</div>
            <div className="hall2">{Language}</div>
            <div className="hall3">{Subs}</div>
          </div>
        </div>

        <Link to={`/ticket?screen=${encodeURIComponent(Screen)}&image=${encodeURIComponent(imageSrc)}&movieName=${encodeURIComponent(movieName)}`}>
          <div className="buy">
            <span className="text">Buy</span>
            <img className="icon" src={Cart} alt="Cart Icon" />
          </div>
        </Link>
          
        
      </div>
    </div>
  );
};

export default FilmCard;
