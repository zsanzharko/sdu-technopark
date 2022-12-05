import React from 'react';
import ScrollToTop from "react-scroll-to-top";

import Header from '../../components/header/Header';
import Post from '../../components/post/Post'
import Comment from '../../components/comment/Comment'

// import union from '../../assets/images/Union.png'
import PostImage from '../../assets/images/PostImage.png'
import { ReactComponent as MySVG } from "../../assets/images/UpSelection.svg";

import './actual.scss'
import Footer from '../../components/footer/Footer';

function Actual() {
    const title = 'Тамагочи в SDU'
    const content = 'Обожечки! Да это же настоящие тамагочи из детства! Вы можете играть, кормить, ухаживать за питомцем, которого выберете из 168 предоставленных персонажей! Тут есть даже Наруто и Патрик! И ты уже точно не забудешь его дома, ведь эти тамагочи еще и брелоки!———————————————————————Наличие и размер необходимого вам товара обязательно уточняйте через директ, сообщения группы или ватсапАктуальные цены вы можете посмотреть на '
    const img = PostImage



    return (
        <>
            <Header/>
            <div className='main-content'>
                <div className='to-the-top'>

                    <button type='button' id='scrollToTopBtn' className='top-button' >
                        <ScrollToTop smooth className='scroll' component={<MySVG />}/>
                        {/* <img src={union} alt="union" />
                        <p>Наверх</p> */}
                    </button>
                </div>
                <div className='post-container'>
                    <div className='actualnoe'>
                        <p>Актуальное</p>
                    </div>
                    <div className='posts'>
                        <Post title = {title} content = {content} image = {img}/>
                        <Comment/>
                    </div>
                </div>
                <div className='filter-post'>
                    
                </div>
            </div>

            <Footer />

            
        </>
    );
}

export default Actual;