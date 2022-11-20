import React from 'react';
import BannerHeader from '../../components/banner/Banner';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import "./home.scss"
import people  from '../../assets/images/sdu-people.png';

const Home = () => {

    var testImage = ` background-image: url(${testImage});`

    return (
        <>
            <Header />
            <div className='banner-header'>
                <BannerHeader />
            </div>

            

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
                </div>
            </div>

            
          

            <Footer text = "Нужна помощь? Свяжитесь с нами:" number = "+7 (727) 307 95 65" link ="www.technopark.sdu.edu.kz" email = "technopark@sdu.edu.kz" />
        </>
    );
}

export default Home;