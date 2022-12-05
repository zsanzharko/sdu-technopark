import React from 'react';
import Header from '../../components/header/Header';
import Footer from "../../components/footer/Footer";

import './cooperation.scss';

import circle from "../../assets/images/circle-for-categories.png";
import mountain from "../../assets/images/mountains-for-categories.png";
// import wheel from "../../assets/images/wheel-for-categories";

function Cooperation() {
    return (
        <>
            <Header />

            <section className="categories">
                <div className="category">
                    <h2 className="category-title title-1">Выберите категорию</h2>
                    <div className="img-container">
                        <img className="circle" src={circle} alt="" />
                        <img className="mountains" src={mountain} alt="" />
                        <span>1</span>
                    </div>
                    <ul className="choice-list">
                        <li className="choice-item"><span>Software</span></li>
                        <li className="choice-item"><span>Hardware</span></li>
                        <li className="choice-item"><span>Enterpreneurship office</span></li>
                    </ul>
                </div>
                <div className="category">
                    <h2 className="category-title title-2">Выберите направление</h2>
                    <div className="img-container">
                        <img className="circle" src={circle} alt="" />
                        <img className="mountains" src={mountain} alt="" />
                        <span>2</span>
                    </div>
                    <ul className="choice-list">
                    <li className="choice-item"><span>Student</span></li>
                        <li className="choice-item"><span>Partner</span></li>
                        <li className="choice-item"><span>Mentor</span></li>
                        <li className="choice-item"><span>Investor</span></li>
                    </ul>
                </div>
            </section>

            <Footer text = "Нужна помощь? Свяжитесь с нами:" number = "+7 (727) 307 95 65" link ="www.technopark.sdu.edu.kz" email = "technopark@sdu.edu.kz" />
        </>
    );
}

export default Cooperation;