import React, { useState, useEffect, useRef } from 'react';
import BannerHeader from '../../components/banner/Banner';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

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
    articleTitle: "",
    articleText: "",
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

    const bannerWheelRef = useRef();
    const [bannerWheelIsVisible, setBannerWheelIsVisible] = useState();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setBannerWheelIsVisible(entry.isIntersecting);
        })
        observer.observe(bannerWheelRef.current);

        if(bannerWheelIsVisible) {
            const bannerWheel = document.querySelector(".banner-wheel")
            bannerWheel.addEventListener("click", () => {
                document.querySelector(".information-section").scrollIntoView({behavior: "smooth", block: "start"});
                infoAnimation();
            })

            const wheelOutside = document.querySelector(".outside-wheel");
            const arrow = document.querySelector(".arrowDown");

            wheelOutside.classList.add("animation");
            arrow.classList.add("animation");
        }
    })

    const infoSectionRef = useRef();
    const [infoSectionIsVisible, setInfoSectionIsVisible] = useState();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setInfoSectionIsVisible(entry.isIntersecting);
        })
        observer.observe(infoSectionRef.current);

        if(infoSectionIsVisible && window.pageYOffset >= document.documentElement.clientHeight * 0.5) {
            infoAnimation();
        }
    })

    const infoAnimation = () => {
        const info = document.querySelector(".information-section");
        const chess = document.querySelector(".chess");
        const bulb = document.querySelector(".bulb");

        info.classList.add("animation");
        chess.classList.add("animation");
        bulb.classList.add("animation");
    }

    const dirSectionRef = useRef();
    const [dirSectionIsVisible, setDirSectionIsVisible] = useState();
    const [articleIndex, setArticleIndex] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setDirSectionIsVisible(entry.isIntersecting);
        })
        observer.observe(dirSectionRef.current);

        if(dirSectionIsVisible) {
            const wheelOutside = document.querySelector(".second-outside-wheel");
            const wheelInside = document.querySelector(".second-inside-wheel");
            const directionSection = document.querySelector(".direction-section");
            const blocks = document.querySelectorAll(".direction-block");
            const circle = document.querySelector(".circle");
            const titles = Array.from(document.querySelectorAll(".block-title"));
            const images = Array.from(document.querySelectorAll(".block-img"));
            const firstBlock = document.querySelector(".firstBlock");
            const secondBlock = document.querySelector(".secondBlock");
            const thirdBlock = document.querySelector(".thirdBlock");
          
            wheelOutside.classList.add("second-outside-animation");
            wheelInside.classList.add("second-inside-animation");
            directionSection.classList.add("animation");
            setTimeout(() => {
                blocks.forEach(e => {
                    e.style.opacity = 1;
                })
                circle.style.zIndex = 98;
                setTimeout(() => {
                    firstBlock.classList.add("animation");
                    secondBlock.classList.add("animation");
                    thirdBlock.classList.add("animation");
                    for(let i = 0; i < titles.length; i++) {
                        titles[i].style.opacity = 1;
                        images[i].style.opacity = 1;
                    }
                }, 500);
            }, 1500);

            const article = document.querySelector(".direction-article");
            const articleBlock = document.querySelector(".article-block");
            let blocksArr = [firstBlock, secondBlock, thirdBlock];
          
            // blocksArr.forEach(e => {
            //   e.addEventListener("click", () => {
            //     article.style.top = `${document.documentElement.scrollTop}px`;
            //     article.style.display = "block";
            //     document.documentElement.style.overflow = "hidden";
            //   })
            // })

            for (let i = 0; i < blocksArr.length; i++) {
                blocksArr[i].addEventListener("click", () => {
                    article.style.top = `${document.documentElement.scrollTop}px`;
                    article.style.display = "block";
                    document.documentElement.style.overflow = "hidden";
                    setArticleIndex(i);
                  })
            }
          
            article.addEventListener("click", (e) => {
              if(e.target === articleBlock) {
                return;
              } else {
                article.style.display = "none";
                document.documentElement.style.overflow = "auto";
              }
            })
        }
    })

    if (articleIndex === 0) {
        text.articleTitle = text.hardware;
    } else if(articleIndex === 1) {
        text.articleTitle = text.software;
    } else {
        text.articleTitle = text.enterpreneurship;
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

            <div className="banner-animation" ref={bannerWheelRef}>
                <div className="banner-wheel">
                    <div className="banner-img-container">
                        <img className="banner-img outside-wheel" src={outsideWheel} alt="wheel" />
                        <img className="banner-img inside-wheel" src={insideWheel} alt="wheel" />
                        <button className="banner-arrow arrowDown">❮</button>
                    </div>
                </div>
            </div>

            <section className="information-section" ref={infoSectionRef}>
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
                            <div className="red-circle"></div>
                        </div>
                    </div>
                    <div className="direction-block second">
                        <div className="secondBlock">
                            <img className="block-img secondBlock-img" src={software} alt="software" />
                            <h2 className="block-title secondBlock-title">{text.software}</h2>
                            <div className="red-circle"></div>
                        </div>
                    </div>
                    <div className="direction-block third">
                        <div className="thirdBlock">
                            <img className="block-img thirdBlock-img" src={enterpreneurship} alt="enterpreneurship" />
                            <h2 className="block-title thirdBlock-title">{text.enterpreneurship}</h2>
                            <div className="red-circle"></div>
                        </div>
                    </div>
                </section>
            </section>

            <section className="connections-section">
                <div className="connection connection-student">
                    <img src={studentIcon} alt="student icon" />
                    <p className="connection-text">{text.student}</p>
                </div>
                <div className="connection connection-partner">
                    <img src={partnerImg} alt="partner icon" />
                    <p className="connection-text">{text.partnership}</p>
                </div>
                <div className="connection connection-investor">
                    <img src={investorImg} alt="investor icon" />
                    <p className="connection-text">{text.investor}</p>
                </div>
                <div className="connection connection-mentor">
                    <img src={mentorImg} alt="mentor icon" />
                    <p className="connection-text">{text.mentorship}</p>
                </div>
            </section>

            <section className="partners-section" ref={dirSectionRef}>
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
                    <div className="article-cross">
                        <span></span><span></span>
                    </div>
                    <h2>{text.articleTitle}</h2>
                    <p>{text.articleText}</p>
                </article>
            </div>

            <Footer text = "Нужна помощь? Свяжитесь с нами:" number = "+7 (727) 307 95 65" link ="www.technopark.sdu.edu.kz" email = "technopark@sdu.edu.kz" />
        </>
    );
}

export default Home;