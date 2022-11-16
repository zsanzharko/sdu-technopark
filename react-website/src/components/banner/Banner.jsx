import React from 'react';
import { useState } from 'react';

import "./banner.scss"

const slides = [
    {url: "http://webmadewell.com/wp-content/uploads/2018/01/img-bg-sample-parallax-header.jpg", title: "banner img"},
    {url: "https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg", title: "banner img"},
    {url: "https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg", title: "banner img"}
]

function radioBtnStyle() {
}

function BannerHeader() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = slideIndex => {
        setCurrentIndex(slideIndex);
    }

    return (
        <div className="banner" style={{backgroundImage: `url(${slides[currentIndex].url})`}}>
            <div className="banner-wrapper">
                <button className="banner-button arrowLeft" onClick={goToPrevious}>@</button>
                <button className="banner-button arrowRigth" onClick={goToNext}>@</button>
                <ul className="banner-dots">
                    {slides.map((slide, slideIndex) => (
                        <li key={slideIndex} className="banner-dot" onClick={() => goToSlide(slideIndex)} style={{backgroundColor:`${slideIndex == currentIndex ? "red" : "white"}`}}></li>
                    ))}
                </ul>
                <h1>SDU TechnoPark</h1>
                <h2>Background landcape scrolls with its own depth</h2>
            </div>
        </div>
    );
}

export default BannerHeader;