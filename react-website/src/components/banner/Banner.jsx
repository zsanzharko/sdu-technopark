import React from 'react';
import { useState } from 'react';

import "./banner.scss"
import wheelImg from "../../assets/images/wheel.svg";

const slides = [
    {url: "https://avatars.mds.yandex.net/get-altay/5195020/2a000001819a0b7813cecc5c42f88529f233/XXL", title: "banner img"},
    {url: "https://postgradoeconomia.com/wp-content/uploads/comunicacion-en-la-empresa.jpg", title: "banner img"},
    {url: "https://elceo.com/wp-content/uploads/2019/06/coding.jpg", title: "banner img"}
]

function BannerHeader() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        document.querySelector(".banner-slides").style.left = `${-100 * newIndex}vw`;    
    }
    
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        document.querySelector(".banner-slides").style.left = `${-100 * newIndex}vw`;
    }

    const goToSlide = slideIndex => {
        setCurrentIndex(slideIndex);
    }

    const changeOpacity = () => {
        const arrows = document.querySelectorAll(".banner-button");
        arrows.forEach(element => {
            if(element.style.opacity == 1) element.style.opacity = 0;
            else element.style.opacity = 1;
        })
    }

    const wheelAnimation = () => {
        const wheel = document.querySelector(".banner-img");
        const arrow = document.querySelector(".arrowDown");

        if(wheel.classList.contains("animation")) {
            wheel.classList.remove("animation");
            arrow.classList.remove("animation");
        } else {
            wheel.classList.add("animation");
            arrow.classList.add("animation");
        }
    }

    return (
        <div className="banner" onMouseEnter={() => {changeOpacity(); wheelAnimation()}} onMouseLeave={() => {changeOpacity(); wheelAnimation()}}>
            <div className="banner-wrapper">
                <button className="banner-button arrowLeft" onClick={goToPrevious}>❮</button>
                <button className="banner-button arrowRigth" onClick={goToNext}>❯</button>
                <ul className="banner-dots">
                    {slides.map((slide, slideIndex) => (
                        <li key={slideIndex} className="banner-dot" onClick={() => goToSlide(slideIndex)} style={{backgroundColor:`${slideIndex == currentIndex ? "#9f2728" : "#ffffff"}`}}></li>
                    ))}
                </ul>
                <div className="banner-animation">
                    <div className="banner-wheel">
                        <img className="banner-img" src={wheelImg} alt="wheel" />
                        <button className="banner-arrow arrowDown">❮</button>
                    </div>
                </div>
            </div>
            <div className="banner-slides">
                <div className="banner-slide" style={{backgroundImage: `url(${slides[0].url}`}}>
                    <h1 className="banner-h1">
                        <span className="span-first">The</span><br />
                        <span className="span-second">Progress</span><br />
                        <span className="span-third">starts</span><br />
                        <span className="span-fourth">here</span><br />
                    </h1>
                <div className="banner-arrow blueArrow"></div>
                </div>
                <div className="banner-slide" style={{backgroundImage: `url(${slides[1].url}`}}></div>
                <div className="banner-slide" style={{backgroundImage: `url(${slides[2].url}`}}></div>
            </div>
        </div>
    );
}

export default BannerHeader;
