import React from 'react';

const Trailer = ({ title, videoSrc, posterSrc }) => {
  return (
    <div className="trailers">
      <h2 className="names">{title}</h2>
      <video src={videoSrc} poster={posterSrc} autoPlay muted playsInline loop></video>
    </div>
  );
};

export default Trailer;
