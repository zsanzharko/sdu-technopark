import React, {useState} from 'react';

import './post.scss'


import like from "../../assets/images/like.png"
import comment from "../../assets/images/comment.png"
import share from "../../assets/images/share.png"
import menavatar from "../../assets/images/men-avatar.png"







function Post(props) {
    const [likes, setLikes] = useState(0);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        if (isClicked) {
        setLikes(likes - 1);
        } else {
        setLikes(likes + 1);
        }
        setIsClicked(!isClicked);
    };

    const text = 'Напишите комментарий...'

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
                    <div className='like-comm-share'>
                        <button className={ `like-button-${isClicked && 'liked'}` } onClick={ handleClick }>
                            <img src={like} alt="" />
                            <span className="likes-counter">{ `${likes}` }</span>
                        </button>

                        <button className='comment-button'>
                            <img src={comment} alt="" />
                            <span>5</span>
                        </button>
                        <button className='share-button'>
                            <img src={share} alt="" />
                        </button>
                    </div>
                </div>
                <div className='comment'>

                </div>

                
            </div>


            
        </>
    );
}

export default Post;