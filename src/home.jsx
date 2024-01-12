import React from "react";
import Add from './add.jsx';
import Sort from './sort.jsx';
import Movie from './movie.jsx';



const HomePage = () =>{
return (
    <>
    <div className="main">
      <Add></Add>
      <Sort></Sort> 
      <Movie
        imageSrc="https://mcswebsites.blob.core.windows.net/1013/Event_7605/gallery/JohnWick4_Apollo_EGlr_3840x2880_EE.jpg"
        movieName="John Wick 4"
        genres="Action, Crime, Thriller"
      />
      <Movie
        imageSrc="https://www.fsm-media.com/wp-content/uploads/2023/02/image001-1536x1536.jpg"
        movieName="Guardians of the Galaxy Vol. 3"
        genres="Action,Fantastic"
      />
      <Movie
        imageSrc="https://nintendoeverything.com/wp-content/uploads/Mario-movie-poster-Feb-10.jpg"
        movieName="Super Mario Bros. The Movie"
        genres="Cartoon,Action,Adventure"
      />
      <Movie
        imageSrc="https://www.fredzone.org/wp-content/uploads/2023/03/Suzume-no-Tojimari.jpg.webp"
        movieName="Suzume no Tojimari"
        genres="Anime,Action,Adventure"
      />
      
    </div>
    
  </>
);
}

export default HomePage;