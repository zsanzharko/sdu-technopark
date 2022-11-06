import React from 'react';
import Header from '../../components/header/Header';
import BannerHeader from '../../components/banner/Banner';

import './actual.scss'

function Actual() {
    return (
        <>
            <Header />
            <BannerHeader />

            <main className='main-content'>
                <div className="main-content-title-place">
                    <div className="main-content-title">
                        <h1>Новости</h1>
                    </div>
                    {/* <div id='main-content-alertion-text'>
                        <p>
                            Авторизуйтесь, чтобы написать комментарий
                        </p>
                    </div> */}

                </div>
                <div className='news-line'></div>
                <div id="main-news-card">
                    <div className="card-split major"></div>
                    <div className="card-split minor news-info">
                        <div className="news-info-main-title">
                            <h1>
                                Some text to title
                            </h1>
                        </div>
                        <div className="news-info-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Arcu non sodales neque sodales. Odio eu feugiat pretium nibh ipsum.
                                Vel pretium lectus quam id leo. Donec enim diam vulputate ut pharetra. Diam sollicitudin tempor id eu nisl. Dictumst quisque sagittis
                                purus sit amet volutpat consequat. Porta non pulvinar neque laoreet suspendisse interdum. Convallis aenean et tortor at risus viverra adipiscing.
                                In hendrerit gravida rutrum quisque. Nibh nisl condimentum id venenatis a condimentum.</p>
                            <div className="news-info-bottom-functions">
                                <div className="news-info-functions-split">asoif</div>
                                <div className="news-info-functions-split">asfa</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Actual;