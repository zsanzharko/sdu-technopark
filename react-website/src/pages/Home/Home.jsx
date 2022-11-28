import React from 'react';
import BannerHeader from '../../components/banner/Banner';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import "./information";

// styles
import './home.scss';

import outsideWheel from "../../assets/images/TechnoParkGearLogoOutside.svg";
import insideWheel from "../../assets/images/TechnoParkGearLogoInside.svg";
import mainImg from "../../assets/images/electronics.jpg";
import chessImg from "../../assets/images/ChessPiece.png";
import bulbImg from "../../assets/images/LightBulb.png";
import historyIcon from "../../assets/images/List_Icon.svg";
import eyeIcon from "../../assets/images/Eye_Scaner_Icon.svg";
import personIcon from "../../assets/images/Opportunities_Icon.svg";
import hardware from "../../assets/images/hardware.png";
import software from "../../assets/images/software.png";
import enterpreneurship from "../../assets/images/enterpreneurship.png";
import studentIcon from "../../assets/images/student.png";
import mentorImg from "../../assets/images/mentor.png";
import partnerImg from "../../assets/images/partner.png";
import investorImg from "../../assets/images/investor.png";
import technoparkLogo from "../../assets/images/sdu_technopark_logo.png";


const text = {
    history: "история",
    slideText: "это наша крутая история не могу она такая крутая еееееееее, но еще есть продолжение оно еще круче погнали это наша крутая история не могу она такая крутая еееееееее, но еще есть продолжение оно еще круче погнали это наша крутая история не могу она такая крутая еееееееее, но еще есть продолжение оно еще круче погнали это наша крутая история",
    vision: "видение",
    opportunities: "возможности",
    hardware: "hardware",
    software: "software",
    enterpreneurship: "enterpreneurship",
    student: "студент",
    partnership: "партнерство",
    investor: "инвестор",
    mentorship: "менторство",
}

const partners = [
    technoparkLogo, technoparkLogo, technoparkLogo, technoparkLogo, technoparkLogo, technoparkLogo
]

const Home = () => {

    const scrollLeft = () => {
        let num = document.querySelector(".partner-logo").clientWidth + 218 * document.documentElement.clientWidth / 1920;
        document.querySelector(".partners-slides").scrollLeft += num;
    }
      
    const scrollRight = () => {
        let num = document.querySelector(".partner-logo").clientWidth + 218 * document.documentElement.clientWidth / 1920;
        document.querySelector(".partners-slides").scrollLeft -= num;
    }  

    return (
        <>
            <Header />

            <BannerHeader>
                <div className="banner-slide" style={{background: `url(${mainImg}), #474747`, backgroundBlendMode: "overlay"}}>
                    <h1 className="banner-h1">
                        <span className="span-first">The</span><br />
                        <span className="span-second">Progress</span><br />
                        <span className="span-third">starts</span><br />
                        <span className="span-fourth">here</span><br />
                    </h1>
                <div className="banner-arrow blueArrow"></div>
                </div>
                <div className="banner-slide" style={{backgroundImage: "url(https://postgradoeconomia.com/wp-content/uploads/comunicacion-en-la-empresa.jpg)"}}></div>
                <div className="banner-slide" style={{backgroundImage: "url(https://elceo.com/wp-content/uploads/2019/06/coding.jpg)"}}></div>
            </BannerHeader>

            <div className="banner-animation">
                <div className="banner-wheel">
                    <div className="banner-img-container">
                        <img className="banner-img outside-wheel" src={outsideWheel} alt="wheel" />
                        <img className="banner-img inside-wheel" src={insideWheel} alt="wheel" />
                        <button className="banner-arrow arrowDown">❮</button>
                    </div>
                </div>
            </div>

            <section className="information-section">
                <div className="information-wrapper">
                    <img className="information-image chess" src={chessImg} alt="chessImg" />
                    <img className="information-image bulb" src={bulbImg} alt="bulbImg" />
                    <article className="info-slide">
                        <h2 className="slide-heading">{text.history}</h2>
                        <img className="slide-icon" src={historyIcon} alt="history icon" />
                        <div className="slide-text-container">
                            <p className="slide-text">{text.slideText}</p>
                        </div>
                    </article>
                    <article className="info-slide">
                        <h2 className="slide-heading">{text.vision}</h2>
                        <img className="slide-icon" src={eyeIcon} alt="history icon" />
                        <div className="slide-text-container">
                            <p className="slide-text">{text.slideText}</p>
                        </div>
                    </article>
                    <article className="info-slide">
                        <h2 className="slide-heading">{text.opportunities}</h2>
                        <img className="slide-icon" src={personIcon} alt="history icon" />
                        <div className="slide-text-container">
                            <p className="slide-text">{text.slideText}</p>
                        </div>
                    </article>
                </div>
                <div className="banner-wheel second-animation">
                    <div className="banner-img-container">
                        <img className="banner-img second-outside-wheel" src={outsideWheel} alt="wheel" />
                        <img className="banner-img second-inside-wheel" src={insideWheel} alt="wheel" />
                    </div>
                </div>

                <section className="direction-section">
                    <div className="circle"></div>
                    <div className="direction-block first">
                        <div className="firstBlock">
                            <img className="block-img firstBlock-img" src={hardware} alt="hardware" />
                            <h2 className="block-title firstBlock-title">{text.hardware}</h2>
                        </div>
                    </div>
                    <div className="direction-block second">
                        <div className="secondBlock">
                            <img className="block-img secondBlock-img" src={software} alt="software" />
                            <h2 className="block-title secondBlock-title">{text.software}</h2>
                        </div>
                    </div>
                    <div className="direction-block third">
                        <div className="thirdBlock">
                            <img className="block-img thirdBlock-img" src={enterpreneurship} alt="enterpreneurship" />
                            <h2 className="block-title thirdBlock-title">{text.enterpreneurship}</h2>
                        </div>
                    </div>
                </section>
            </section>

            <section className="connections-section">
                <div className="connection connection-student">
                    <div className="circle-connection">
                        <img src={studentIcon} alt="student icon" />
                    </div>
                    <p className="connection-text">{text.student}</p>
                </div>
                <div className="connection connection-partner">
                    <div className="circle-connection">
                        <img src={partnerImg} alt="partner icon" />
                    </div>
                    <p className="connection-text">{text.partnership}</p>
                </div>
                <div className="connection connection-investor">
                    <div className="circle-connection">
                        <img src={investorImg} alt="investor icon" />
                    </div>
                    <p className="connection-text">{text.investor}</p>
                </div>
                <div className="connection connection-mentor">
                    <div className="circle-connection">
                        <img src={mentorImg} alt="mentor icon" />
                    </div>
                    <p className="connection-text">{text.mentorship}</p>
                </div>
            </section>

            <section className="partners-section">
                <button className="partner-button arrowLeft" onClick={scrollRight}>❮</button>
                <div className="partners-slides">
                    {partners.map((partner, partnerIndex) => (
                        <img key={partnerIndex} className="partner-logo" src={partners[partnerIndex]} alt="partner"></img>
                    ))}
                </div>
                <button className="partner-button arrowRigth" onClick={scrollLeft}>❯</button>
            </section>

            <div className="direction-article">
                <article className="article-block">
                </article>
            </div>

            <Footer text = "Нужна помощь? Свяжитесь с нами:" number = "+7 (727) 307 95 65" link ="www.technopark.sdu.edu.kz" email = "technopark@sdu.edu.kz" />
        </>
    );
}

export default Home;