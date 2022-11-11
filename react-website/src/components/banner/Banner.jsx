import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import peopleImage from '../../assets/images/BannerTechnoPark.jpg';


import "./banner.scss"

function BannerHeader() {
    
    return (
        <div className='banner'>
        <Carousel className='carusel-banner'>
                <div className='carusel-image'>
                    <img src={peopleImage} />
                    
                </div>
                <div className='carusel-image'>
                    <img src={peopleImage} />
                    
                </div>
                <div className='carusel-image'>
                    <img src={peopleImage} />
                    
                </div>
            </Carousel>
        </div>
    );
}

export default BannerHeader;