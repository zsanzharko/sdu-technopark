import React from 'react';

import './style.scss';

export const CarouselImage = ({ person }) => {
  return (
    <div className="carousel-person">
      <img src={person.img} alt="" />
    </div>
  );
};