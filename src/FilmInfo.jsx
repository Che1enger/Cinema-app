import React from 'react';
import Star from './img/star.svg'
import './Filminfo.css'
const FilmInfo = ({movieName,genres}) => {

  return (
    <div className="info2">
        <div className="info_name">
            {movieName} <div className="age">14+</div>
        </div>
        <div className="som">
            <div className="ganro">
                <div className="name_ganro">Genre</div>
                <div className="ganros">{Array.isArray(genres) ? genres.join(', ') : genres}</div>
                </div>
            <div className="with_time">
                <div className="ganro">
                <div className="name_ganro">Director</div>
                <div className="ganros">Chad Stahelski</div>
                </div>
                <div className="ganro">
                <div className="name_ganro">Run time</div>
                <div className="ganros">2h 49min</div>
                </div>
            </div>
            <div className="ganro">
                <div className="name_ganro">Cast</div>
                <div className="ganros">
                Keanu Reeves, Laurence Fishburne, Hiroyuki Sanada, Donnie Yen, Lance Reddick
                </div>
            </div>
            <div id="star" className="ganro">
                <div className="name_ganro">Rating</div>
                <div className="ganros">
                8 <img src={Star} alt="" /> of 10
                </div>
            </div>
            </div>
        </div>
        
  );
};

export default FilmInfo;
