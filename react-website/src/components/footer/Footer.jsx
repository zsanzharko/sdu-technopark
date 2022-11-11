import React from 'react';

import './footer.scss'
import facebook from '../../assets/images/link-icons/facebook-icon/icons8-facebook-30.png';
import linkedin from '../../assets/images/link-icons/linkedin-icon/icons8-linkedin-50.png';
import instagram from '../../assets/images/link-icons/instagram-icon/icons8-instagram-30.png';


function Footer() {
    return ( <>
    
        <div className='footer'>
            <div className='social-networks'>
                <img src={facebook} alt="Logo TechnoPark" loading="lazy" />
                <img src={linkedin} alt="Logo TechnoPark" loading="lazy" />
                <img src={instagram} alt="Logo TechnoPark" loading="lazy" />
            </div>
            <div className='copyrights'>
                <p>© 2021 Copyright: SDU TechnoPark</p>
            </div>

        </div>
    
    </> );
}

export default Footer;