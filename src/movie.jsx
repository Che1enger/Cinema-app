import React from 'react';
import { Link } from 'react-router-dom';
import Time from './Time.jsx'
import TrailerIcon from './img/trailer_icon.svg'
import './movie.css'

const Movie = (props) => {
const { imageSrc, movieName, genres } = props;
  return (
        <div className="wrap">
          <div className="poster">
            <img className="image" src={imageSrc} alt={`${movieName} poster`} />
          </div>
          <Link to={`/film?movieName=${encodeURIComponent(movieName)}&genres=${encodeURIComponent(genres)}&imageSrc=${encodeURIComponent(imageSrc)}`}>
              <p id="name_movie">{movieName}</p>
          </Link>
          <div className="ganr">
            <div className="name_ganr">Genre</div>
            <div className="ganrs">{genres}</div>
          </div>
      <Time></Time>
      <div className="trailer">
        <span className="text">Trailer</span>
        <img className="icon" src={TrailerIcon} alt="trailer_icon" />
      </div>
    </div>
  );
};

export default Movie;
