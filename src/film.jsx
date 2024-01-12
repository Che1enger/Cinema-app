import React from "react";
import { useLocation } from 'react-router-dom';

import Trailer from "./trailer";
import './trailer.css'
import Video from './img/2.mp4'
import FilmInfo from "./FilmInfo";

import FilmPhotos from "./FilmPhotos";
import FilmCard from "./FilmCard";

const Film = () =>{
    const location = useLocation();
    const params = new URLSearchParams(location.search);
  
    const movieName = params.get('movieName');
    const genres = params.get('genres')?.split(', ');
    const imageSrc = params.get('imageSrc')
    
    return(
        <>
            <Trailer
                title={movieName}
                videoSrc={Video}
                posterSrc="https://images.squarespace-cdn.com/content/v1/5fbc4a62c2150e62cfcb09aa/1676718086151-D8SIKHH00GT5UCE7PUB0/john-wick-4-cast-1647530231314.jpeg?format=1000w"
            />
            <div className='info_photos'> 
                <FilmInfo movieName={movieName} genres={genres} />
                <FilmPhotos 
                imageSrc={imageSrc}
                />
            </div>
            <FilmCard 
            movieName={movieName} 
            Screen={1}
            progressValue={25}
            Place="Ulemiste"
            Language="English"
            Subs="Not"
            imageSrc={imageSrc}
            />
            <FilmCard 
            movieName={movieName} 
            Screen={5}
            progressValue={85}
            Place="Ulemiste"
            Language="English"
            Subs="Not"
            imageSrc={imageSrc}
            />
            <FilmCard 
            movieName={movieName} 
            Screen={1}
            progressValue={50}
            Place="Kristine"
            Language="Estonia"
            Subs="Yes"
            imageSrc={imageSrc}
            />
        </>
        
    );
};

export default Film;