import React from 'react';
import BannerHeader from '../../components/banner/Banner';
import Header from '../../components/header/Header';
// styles
import style from './home.scss'

import image from '../../assets/images/history-icon-512.png'

import testImage from '../../assets/images/software-image.jpg'

const Home = () => {

    var testImage = ` background-image: url(${testImage});`

    return (
        <>
            <Header />

            <BannerHeader />

            <div className={'fact_place'}>
                <div className={'fact_inner'}>
                    <h3 className={'fact_main_title'}>Некоторые факты о нас</h3>
                    <div className={'fact_card_place'}>
                        <div className="fact_card">
                            <div className={'title_place'}>
                                <h4 className='title'>
                                    Наша история
                                </h4>

                            </div>
                            <div className="image_place">
                                <img src={image} alt='history' />
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Mauris rhoncus aenean vel elit. Quis viverra nibh cras pulvinar
                                mattis nunc sed blandit libero.
                            </p>
                        </div>
                        <div className="fact_card">
                            <div className={'title_place'}>
                                <h4 className='title'>
                                    Наше видение
                                </h4>
                            </div>
                            <div className="image_place">
                                <img src={image} alt='history' />
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Mauris rhoncus aenean vel elit. Quis viverra nibh cras pulvinar
                                mattis nunc sed blandit libero.
                            </p>
                        </div>
                        <div className="fact_card">
                            <div className={'title_place'}>
                                <h4 className='title'>
                                    Наши возможности
                                </h4>
                            </div>
                            <div className="image_place">
                                <img src={image} alt='history' />
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Mauris rhoncus aenean vel elit. Quis viverra nibh cras pulvinar
                                mattis nunc sed blandit libero.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
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
                </div>
            </div>
        </>
    );
}

export default Home;