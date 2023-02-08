import React from 'react';

import './style.scss';

export const CarouselImage = ({ person, fn }) => {
  return (
    <div className="carousel-person" onClick={fn}>
      <img src={person.img} alt="" onClick={fn} />
    </div>
  );
};