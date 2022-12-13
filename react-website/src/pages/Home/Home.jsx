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
    articleTextH: `<b>IoT lab</b><br><br>
<b>Основная деятельность:</b>
научноисследовательская и практическая лаборатория.<br><br>

<b>Лаборатория работает в направлениях:</b><br>
- разработка IoT устройств.<br>
- изготовление прототипов.<br>
- робототехника и электромеханика<br>
- лазерные и фрезерные работы по материалам типа фанеры и акрила.<br>
- дроны и радиоуправляемые машины<br>
- реализация частных проектов от сторонних организаций и предприятий касательно электронных устройств.<br><br>

<b>Например:</b> ремонт, настройка, сборка и изготовление электронных устройств.
Так же в задачи лаборатории входит развитие у студентов навыков и знаний по основам
    электроники и схемотехники, развитие
    инженерного мышления и умения решать
    сложные производственные задачи, например:
    администрирование нетворк сетей; выявлять и
    исправлять поломки электронных компонентов
    оборудования; проектировать и собирать
    электронные платы необходимого оборудования;
    разбираться и программировать
    микроконтроллеры и микропроцессоры систем
    автоматики.<br><br>

    Набор в группу ведется по приоритетной
    специальности ВТиПО (вычислительная техника
    и программное обеспечение) Инженерного
    Факультета. Специальности ИС
    (информационные системы) и все желающие
    получить вышеописанные навыки тоже
    допускаются в лабораторию.<br><br>

    Помимо обучения основам электроники,
    схемотехники и решения производственных
    задач, лаборатория занимается развитием
    научных проектов, участвует в различных
    городских и межвузовских мероприятиях.`,
    articleTextS: `Команда Технопарка предоставляет <b>решения и
    продукты для бизнеса</b>, такие как:<br><br>
    - мобильное приложение<br>
    - веб приложение<br>
    - дэшборды<br>
    - Internet of Things (IoT) решения<br>
    - Computer Vision<br>
    <li></li>
   - Natural Langiage Processing<br><br>
    Наша команда состоит из опытных
    преподавателей, магистрантов и докторантов
    SDU. Также выпусники университета, имеющие
    большой опыт разработки, консультируют и
    курируют Технопарк в разработке продуктов.<br><br>
    Студенты бакалавриата могут получить
    промышленный опыт разработки программного
    обеспечения, присоединившись к команде
    Технопарка.`,
    articleTextE: `<b>Миссия</b> Офиса предпринимательства (OП) -
    сподвигать студентов СДУ к
    предпринимательству посредством обучения,
    поддержки и наставничества.<br><br>
    <b>Видение:</b> Содействовать студентам и
    выпускникам на пути предпринимательства,
    помочь установить необходимые связи с
    инвесторами и действующими
    предпринимателями.<br><br>
    <b>Кому мы служим:</b> студенты, ППС, сотрудники,
    исследователи и выпускники, а также население
    в непосредственной близости от Университета.<br><br>
    <b>Расположение:</b>
    ОП располагается на кампусе СДУ и будет
    включать в себя офисы и коворкинг.<br><br>
    <b>Деятельность ОП</b> будет в двух основных
    направлениях:<br><br>
    1) <b>В рамках учебной программы:</b>
    Разработка курсов по предпринимательству на
    факультетах СДУ, преподаваемым в рамках
    учебных программ на инженерном факультете, в
    бизнес-школе и на педагогическом факультете.
    Поддержка ППС учебными планами,
    методологией, материалами. Основная цель
    обучения состоит в том, чтобы студенты
    приобрели базовое понимание о
    предпринимательстве и соответствующие
    навыки. Общее количество студентов составит
    около 200-250 студентов в год.<br>
    2) <b>Дополнительные меры поддержки:</b><br>
    а) Серия гостевых лекций от действующих
    предпринимателей.<br>
    б) Бизнес-акселератор: программа будет
    проходить во время зимних и/или летних
    каникул, продолжительностью 3-4 недели.<br>
    в) Бизнес-инкубатор и программа
    наставничества: инциативы призваны
    объединить сообщество единомышленников,
    оказать поддержку и предоставить необходимые
    ресурсы. Участие будет открытым для студентов,
    сотрудников, ППС кто хочет начать свой бизнес,
    независимо от стадии (от идеи до запуска),
    отрасли или типа бизнеса. Участие в этой
    программе будет длится до 6 месяцев и будет
    включать в себя доступ к офисным помещениям,
    технопарку и юридическим, бухгалтерским,
    финансовым и другим услугам.<br>
    г) Программа создания венчурных предприятий`,
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

            for (let i = 0; i < blocksArr.length; i++) {
                blocksArr[i].addEventListener("click", () => {
                    article.style.top = `${document.documentElement.scrollTop}px`;
                    article.style.display = "block";

                    if (i === 0) {
                        articleBlock.querySelector("h2").innerHTML = text.hardware; 
                        articleBlock.querySelector("p").innerHTML = text.articleTextH;
                    }
                    else if (i === 1) {
                        articleBlock.querySelector("h2").innerHTML = text.software;
                        articleBlock.querySelector("p").innerHTML = text.articleTextS;
                    }
                    else {
                        articleBlock.querySelector("h2").innerHTML = text.enterpreneurship;
                        articleBlock.querySelector("p").innerHTML = text.articleTextE;
                    }
                    
                    document.documentElement.style.overflow = "hidden";
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
                    <h2>""</h2>
                    <p>""</p>
                </article>
            </div>

            <Footer text = "Нужна помощь? Свяжитесь с нами:" number = "+7 (727) 307 95 65" link ="www.technopark.sdu.edu.kz" email = "technopark@sdu.edu.kz" />
        </>
    );
}

export default Home;