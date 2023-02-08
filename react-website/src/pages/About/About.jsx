import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./about.scss";

import puzzleLeft from "../../assets/images/puzzle-left.svg";
import puzzleRight from "../../assets/images/puzzle-right.svg";
import socket from "../../assets/images/socket.svg";
import shalabek from "../../assets/images/shalabek.png";
import sdulogo from '../../assets/images/sdu_technopark_logo.png';
import people from "../../assets/images/pic-for-about.png";
import { CarouselImage } from "../../components/CarouselImage";

const teachers = [
  {
    name: "Шаломов Шалабек 1",
    img: shalabek
  },
  {
    name: "Шаломов Шалабек 2",
    img: "https://images.ctfassets.net/hrltx12pl8hq/qGOnNvgfJIe2MytFdIcTQ/429dd7e2cb176f93bf9b21a8f89edc77/Images.jpg"
  },
  {
    name: "Шаломов Шалабек 3",
    img: shalabek
  },
  {
    name: "Шаломов Шалабек 4",
    img: "https://images.ctfassets.net/hrltx12pl8hq/qGOnNvgfJIe2MytFdIcTQ/429dd7e2cb176f93bf9b21a8f89edc77/Images.jpg"
  },
  {
    name: "Шаломов Шалабек 5",
    img: shalabek
  },
  {
    name: "Шаломов Шалабек 6",
    img: "https://images.ctfassets.net/hrltx12pl8hq/qGOnNvgfJIe2MytFdIcTQ/429dd7e2cb176f93bf9b21a8f89edc77/Images.jpg"
  },
  {
    name: "Шаломов Шалабек 7",
    img: shalabek
  },
  {
    name: "Шаломов Шалабек 8",
    img: "https://images.ctfassets.net/hrltx12pl8hq/qGOnNvgfJIe2MytFdIcTQ/429dd7e2cb176f93bf9b21a8f89edc77/Images.jpg"
  }
]

const students = [
  {
    name: "Шаломов Шалабек 21",
    img: "https://pixlr.com/images/index/remove-bg.webp"
  },
  {
    name: "Шаломов Шалабек 22",
    img: shalabek
  },
  {
    name: "Шаломов Шалабек 23",
    img: "https://pixlr.com/images/index/remove-bg.webp"
  },
  {
    name: "Шаломов Шалабек 24",
    img: shalabek
  },
  {
    name: "Шаломов Шалабек 25",
    img: "https://pixlr.com/images/index/remove-bg.webp"
  },
  {
    name: "Шаломов Шалабек 26",
    img: shalabek
  },
  {
    name: "Шаломов Шалабек 27",
    img: "https://pixlr.com/images/index/remove-bg.webp"
  },
  {
    name: "Шаломов Шалабек 28",
    img: shalabek
  }
]

function About() {
  const [peopleDatabase, setPeopleDatabase] = useState(students);
  const [imageArray, setImageArray] = useState(peopleDatabase.slice(0, 5));
  const [activeButton, setActiveButton] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = () => {
    setActiveButton(!activeButton);
    if (activeButton) {
      setPeopleDatabase(teachers);
    } else {
      setPeopleDatabase(students);
    }
  }

  const handleLeftClick = () => {
    if (activeIndex === 0) {
      setActiveIndex(peopleDatabase.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  }

  const handleRightClick = () => {
    if (activeIndex === peopleDatabase.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  }

  const handleSliderClick = (e) => {
    const slides = document.querySelectorAll(".carousel-person");
    if (e.pageX <= window.innerWidth / 2) {
      slides.forEach((slide) => {
        slide.style.left = "350px";
        slide.style.transition = "all 0.2s ease-in-out";
      })
      handleLeftClick();
    } else {
      slides.forEach((slide) => {
        slide.style.left = "-350px";
        slide.style.transition = "all 0.2s ease-in-out";
      })
      handleRightClick();
    }
    setTimeout(() => {
      slides.forEach((slide) => {
        slide.style.left = "0px";
        slide.style.transition = "all 0s ease-in-out";
      })
    }, 200);
  }

  useEffect(() => {
    setTimeout(() => {
      const minIndex = activeIndex;
      const maxIndex = activeIndex + 5;
      const temp = peopleDatabase.slice(minIndex, maxIndex);
      if (maxIndex > peopleDatabase.length - 1) {
        const remainder = activeIndex - 3;
        temp.push(...peopleDatabase.slice(0, remainder));
      }
      setImageArray(temp);
    }, 200)
  }, [activeIndex, peopleDatabase]);

  return (
    <div className="about">
      <section className="about-section first">
        <h2 className="title">наша миссия</h2>
        <div className="about-img-block">
          <img src={puzzleLeft} alt="" className="puzzle-left" />
          <div>
            <img src={socket} alt="" className="socket"/>
          </div>
          <img src={puzzleRight} alt="" className="puzzle-right" />
        </div>
        <p>трансформировать сообщество СДУ в комьюнити предпринимателей, где каждый вне зависимости от своих скиллов и идей будет иметь возможность реализовать свои проекты и довести их до конечного продукта.</p>
        <button className="banner-arrow arrowDown">❮</button>
      </section>
      <section className="about-section">
        <h2 className="title">наша команда</h2>
        <div className="about-button-block">
          <button disabled={activeButton} onClick={handleButtonClick}>студенты</button>
          <button disabled={!activeButton} onClick={handleButtonClick}>учителя</button>
        </div>
        <div className="about-carousel">
          <div className="about-carousel__wrapper" onClick={(e) => handleSliderClick(e)}>
            {imageArray.map((person) => <CarouselImage person={person}/>)}
          </div>
        </div>
        <p className="under-carousel__name">{imageArray[3].name}</p>
        <p className="under-carousel__text">Команда Технопарка состоит из наставников, имеющих индустриальный и/или исследовательский опыт. Это преподаватели СДУ, студенты с опытом участия в проектах, эксперты из индустрии.</p>
        <button className="banner-arrow arrowDown">❮</button>
      </section>
      <section className="about-section">
        <div className="about-section-block">
          <img src={sdulogo} alt="" />
          <h2>Раскроем потенциал вместе</h2>
          <Link to="/cooperation"><button className="block-button">Заполнить форму</button></Link>
        </div>
        <div className="img-composition">
          <div>
            <div></div>
          </div>
          <img src={people} alt="" />
        </div>
      </section>
    </div>
  )
}

export default About;