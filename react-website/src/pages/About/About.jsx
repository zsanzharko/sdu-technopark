import React from "react";
import { Link } from "react-router-dom";

import "./about.scss";

import puzzleLeft from "../../assets/images/puzzle-left.svg";
import puzzleRight from "../../assets/images/puzzle-right.svg";
import socket from "../../assets/images/socket.svg";
import shalabek from "../../assets/images/shalabek.png";
import sdulogo from '../../assets/images/sdu_technopark_logo.png';
import people from "../../assets/images/pic-for-about.png";

const teachers = [
  {
    name: "Шаломов Шалабек",
    img: shalabek
  },
  {
    name: "Шаломов Шалабек",
    img: shalabek
  },
  {
    name: "Шаломов Шалабек",
    img: shalabek
  },
  {
    name: "Шаломов Шалабек",
    img: shalabek
  },
  {
    name: "Шаломов Шалабек",
    img: shalabek
  },
  {
    name: "Шаломов Шалабек",
    img: shalabek
  },
  {
    name: "Шаломов Шалабек",
    img: shalabek
  },
  {
    name: "Шаломов Шалабек",
    img: shalabek
  }
]

function About() {
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
          <button>студенты</button>
          <button>учителя</button>
        </div>
        <div className="about-carousel">
          {teachers.map((person) => 
            <div className="carousel-person">
              <img src={person.img} alt="" />
              <p>{person.name}</p>
            </div>       
          )}
        </div>
        <p className="under-carousel-text">Команда Технопарка состоит из наставников, имеющих индустриальный и/или исследовательский опыт. Это преподаватели СДУ, студенты с опытом участия в проектах, эксперты из индустрии.</p>
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