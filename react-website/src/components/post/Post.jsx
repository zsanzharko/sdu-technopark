import React from 'react';
import Header from '../../components/header/Header';
import BannerHeader from '../../components/banner/Banner';
import './post.scss'
import Footer from '../../components/footer/Footer';



function Post(props) {
    return (
        <>
            <div className='main-post'>
                <div className='post'>
                    <div className='post-name'>
                        <p>{props.title}</p>
 
                    </div>
                    <div className='post-content'>
                        <p>{props.content}</p>
                    </div>
                    <div className='post-image'>
                        <img src={props.image} alt="" />
                    </div>
                </div>
                <div className='comment'>

                </div>
            </div>


            
        </>
    );
}

export default Post;