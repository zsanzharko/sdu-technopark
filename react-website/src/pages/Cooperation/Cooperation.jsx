import React from 'react';
import Header from '../../components/header/Header';
import Footer from "../../components/footer/Footer";

import './cooperation.scss';

import circle from "../../assets/images/circle-for-categories.png";
import mountain from "../../assets/images/mountains-for-categories.png";
import wheel from "../../assets/images/wheelicon-for-cooperation.png";

function Cooperation() {
    return (
        <>
            <Header />

            <section className="categories">

                <section className="google-form">
                    <div className="img-container">
                        <img className="circle" src={circle} alt="" />
                        <img className="wheel" src={wheel} alt="" />
                        <img className="mountains" src={mountain} alt="" />
                    </div>
                    <iframe title="google form" src="https://docs.google.com/forms/d/e/1FAIpQLSdJ_6W_12zZGppsD4v9ovhleha-A1KTtFs_ihCRPgElIoWFrQ/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0" scrolling="no"></iframe>
                </section>

            </section>

            <Footer text = "Нужна помощь? Свяжитесь с нами:" number = "+7 (727) 307 95 65" link ="www.technopark.sdu.edu.kz" email = "technopark@sdu.edu.kz" />
        </>
    );
}

export default Cooperation;