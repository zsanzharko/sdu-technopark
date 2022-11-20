import React from 'react';

import './footer.scss'
import facebook from '../../assets/images/link-icons/facebook-icon/facebook.png';
import sdulogo from '../../assets/images/sdu_technopark_logo.png'
import linkedin from '../../assets/images/link-icons/linkedin-icon/linkedin.png';
import instagram from '../../assets/images/link-icons/instagram-icon/instagram.png';
import earth from '../../assets/images/link-icons/earth-icon/earth.svg';
import envelope from '../../assets/images/link-icons/envelope-icon/Envelope.svg';




function Footer(props) {
    return ( <>
    
        <div className='footer'>
            <div className='logos-banner'>
                <div className='technopark-logo'>
                    <img src={sdulogo} alt="Logo TechnoPark" loading="lazy" />
                </div>
                <div className='social-networks'>    
                    <img src={facebook} alt="facebook" loading="lazy" />
                    <img src={instagram} alt="instagram" loading="lazy" className='instagram' />
                    <img src={linkedin} alt="linkedin" loading="lazy" />
                    
                </div>
            </div>
            
            <div className='copyrights'>
                <div className='need-help'>
                    <h1>{props.text}</h1>
                    <h1>{props.number}</h1>
                </div>
                <div className='uni-contacts'>
                    <div className='contact'>
                        <img src={earth} alt="website" loading="lazy" />
                        <p>{props.link}</p>
                    </div>
                    <div className='contact'>
                        <img src={envelope} alt="website" loading="lazy" />
                        <p>{props.email}</p>
                    </div>
                </div>
            </div>

        </div>
    
    </> );
}

export default Footer;