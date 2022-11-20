import React from 'react';
import BannerHeader from '../../components/banner/Banner';
import Header from '../../components/header/Header';
<<<<<<< HEAD
import Footer from '../../components/footer/Footer';
import "./home.scss"
import people  from '../../assets/images/sdu-people.png';
=======
import functionality from "./information";

// styles
import './home.scss';

import wheelImg from "../../assets/images/wheel.svg";
import chessImg from "../../assets/images/ChessPiece.png";
import bulbImg from "../../assets/images/LightBulb.png";
import historyIcon from "../../assets/images/List_Icon.svg";
import eyeIcon from "../../assets/images/Eye_Scaner_Icon.svg";
import personIcon from "../../assets/images/Opportunities_Icon.svg";
>>>>>>> 73e46e7 (add second section)

const Home = () => {

    return (
        <>
            <Header />
            <div className='banner-header'>
                <BannerHeader />
            </div>

<<<<<<< HEAD
            

            <div className='large-container'>
                <div className='second-container'>
                    <div className='innerof-container'>
                        <h1>Наша история</h1>
                    </div>
                </div>
            <div className='first-container'>
                <div className='story-container'>
                    
                        <div className='heading-container' >
                            <img src={people} alt="" />
                        </div>
                        <div className='content'>
                            <p>Во всех учебниках пишут, что история – это наука о прошлом. История – это записи о том, что происходило в мире, в нашей стране или в нашем родном городе много лет назад.</p>
                        </div>

                </div>

                <div className='story-container'>
                    <div className='heading-container '>
                        <img src={people} alt="" />
                    </div>
                    <div className='content'>
                        <p> Даже то, что происходит с нами сейчас, когда-то станет историей и попадет в школьные учебники.
                            Знать историю своего народа также важно, как и разбираться в том, что происходило во всем мире давным-давно.</p>
                    </div>
                </div>
                <div className='story-container'>
                    <div className='heading-container '>
                        <img src={people} alt="" />
                    </div>
                    <div className='content'>
                        <p>История учит нас положительным и отрицательным примерам. Мы можем сделать выводы на ошибках прошлого и больше их не совершать. </p>
                    </div>
                </div>
            </div>
            </div>
            <div className='vision'>
                <div className='vision-content-1'>

                </div>
                <div className='vision-content-2'>
                    <h1>ВИДЕНИЕ И ВОЗМОЖНОСТИ</h1>
                </div>
                <div className='vision-content-3'>
=======
            <section className="information-section">
                <img className="information-image chess" src={chessImg} alt="chessImg" />
                <img className="information-image bulb" src={bulbImg} alt="bulbImg" />
                <div className="information-wrapper">
                    <article className="info-slide">
                        <h2 className="slide-heading">heading</h2>
                        <img className="slide-icon" src={historyIcon} alt="history icon" />
                        <div className="slide-text-container">
                            <p className="slide-text">
                                это наша крутая история не могу она такая крутая еееееееее, но еще есть продолжение оно еще круче погнали это наша крутая история не могу она такая крутая еееееееее, но еще есть продолжение оно еще круче погнали это наша крутая история не могу она такая крутая еееееееее, но еще есть продолжение оно еще круче погнали это наша крутая история 
                            </p>
                        </div>
                    </article>
                    <article className="info-slide">
                        <h2 className="slide-heading">heading</h2>
                        <img className="slide-icon" src={eyeIcon} alt="history icon" />
                        <div className="slide-text-container">
                            <p className="slide-text">
                                это наша крутая история не могу она такая крутая еееееееее, но еще есть продолжение оно еще круче погнали это наша крутая история не могу она такая крутая еееееееее, но еще есть продолжение оно еще круче погнали это наша крутая история не могу она такая крутая еееееееее, но еще есть продолжение оно еще круче погнали это наша крутая история 
                            </p>
                        </div>
                    </article>
                    <article className="info-slide">
                        <h2 className="slide-heading">возможности</h2>
                        <img className="slide-icon" src={personIcon} alt="history icon" />
                        <div className="slide-text-container">
                            <p className="slide-text">
                                это наша крутая история не могу она такая крутая еееееееее, но еще есть продолжение оно еще круче погнали это наша крутая история не могу она такая крутая еееееееее, но еще есть продолжение оно еще круче погнали это наша крутая история не могу она такая крутая еееееееее, но еще есть продолжение оно еще круче погнали это наша крутая история 
                            </p>
                        </div>
                    </article>
                </div>
                <div className="banner-wheel second-animation">
                    <img className="banner-img second-wheel" src={wheelImg} alt="wheel" />
                </div>

                <section className="direction-section">
                    <span className="direction-line first"></span>
                    <span className="direction-line second"></span>
                    <span className="direction-line third"></span>
                </section>
            </section>

            <div className='direction_place'>
                <div className="direction_place_inner">
                    <div className="direction_place_split">
                        <h1 className="direction_main_title">
                            Наши направления и предложения
                        </h1>
                    </div>
                    <div className="direction_place_split">
                        <div className="direction_info">
                            <div className="flex-info">
                                <div className="direction_image_info">
                                    <div className="direction_image_info_inner">
                                        <h2>Text</h2>
                                    </div>
                                </div>
                                <div className="direction_image_info">
                                    <div className="direction_image_info_inner">
                                        <h2>Text</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="direction_image_info">
                                <div className="direction_image_info_inner">
                                    <h2>Text</h2>
                                </div>
                            </div>
                        </div>
                    </div>
>>>>>>> 73e46e7 (add second section)
                </div>
            </div>

            
          

            <Footer text = "Нужна помощь? Свяжитесь с нами:" number = "+7 (727) 307 95 65" link ="www.technopark.sdu.edu.kz" email = "technopark@sdu.edu.kz" />
        </>
    );
}

export default Home;