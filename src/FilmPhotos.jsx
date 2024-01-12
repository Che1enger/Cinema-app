import React from 'react';
import './Photos.css'
const FilmPhotos = ({imageSrc}) => {
  return (
    <div className="photos">
      <div className="photo1">
        <img
          src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/11/social-feature-john-wick-4-keanu-reeves.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
          alt="1"
        />
      </div>
      <div className="small_photos">
        <div className="photo2">
          <img
            src={imageSrc}
            alt="2"
          />
        </div>
        <div className="photo3">
          <img
            src="https://media.gq.com/photos/636d5a5e81d8a404117fe04d/16:9/w_2560%2Cc_limit/MCDJOWI_LG001.jpeg"
            alt="3"
          />
        </div>
      </div>
    </div>
  );
};

export default FilmPhotos;
