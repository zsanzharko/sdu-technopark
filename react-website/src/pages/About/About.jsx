import React from 'react';
import Header from '../../components/header/Header';
import BannerHeader from '../../components/banner/Banner';
import "./about.scss"
import peopleImage from '../../assets/images/template-people/student-male.jpg';
import softImage from '../../assets/images/software-image.jpg';
import Footer from '../../components/footer/Footer';



function About() {
    return (
        <>
            <Header />
            <BannerHeader />


            <div className='main-container'>
                <div className='mission-container white black'>
                    
                        <div className='heading-container' >
                            <h1>О нас</h1>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Eget nulla facilisi etiam dignissim diam
                            quis enim lobortis scelerisque. Sit amet nisl suscipit adipiscing bibendum est
                            ultricies integer. Dictum at tempor commodo ullamcorper a lacus. Aliquam nulla
                            facilisi cras fermentum. Nisi lacus sed viverra tellus in hac habitasse platea
                            dictumst.</p>
                        </div>

                </div>

                <div className='mission-container'>
                    <div className='heading-container '>
                        <h1>Миссия</h1>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Eget nulla facilisi etiam dignissim diam
                        quis enim lobortis scelerisque. Sit amet nisl suscipit adipiscing bibendum est
                        ultricies integer. Dictum at tempor commodo ullamcorper a lacus. Aliquam nulla
                        facilisi cras fermentum. Nisi lacus sed viverra tellus in hac habitasse platea
                        dictumst.</p>
                    </div>
                </div>
            </div>
            <div className='our-team'>
                <div className='our-team-head'>
                    <h4>Наша команда</h4>
                </div>
            
                <div className='team-members'>
                    <div className='member'>
                        <div className='member-photo'>
                            <img src={peopleImage} alt="Logo TechnoPark" loading="lazy" />
                        </div> 
                        <div className='member-info'>
                            <div>

                            </div>
                            <h4>Имя фамилия</h4> 
                            
                            <p>Позиция</p>
                        </div>
                    
                    
                    </div>
                
                    <div className='member'>
                        <div className='member-photo'>
                            <img src={peopleImage} alt="Logo TechnoPark" loading="lazy" />
                        </div> 
                        <div className='member-info'>
                            <div>

                            </div>
                            <h4>Имя фамилия</h4> 
                            
                            <p>Позиция</p>
                        </div>
                    
                    
                    </div>
                    <div className='member'>
                        <div className='member-photo'>
                            <img src={peopleImage} alt="Logo TechnoPark" loading="lazy" />
                        </div> 
                        <div className='member-info'>
                            <div>

                            </div>
                            <h4>Имя фамилия</h4> 
                            
                            <p>Позиция</p>
                        </div>
                    
                    
                    </div>
                    <div className='member'>
                        <div className='member-photo'>
                            <img src={peopleImage} alt="Logo TechnoPark" loading="lazy" />
                        </div> 
                        <div className='member-info'>
                            <div>

                            </div>
                            <h4>Имя фамилия</h4> 
                            
                            <p>Позиция</p>
                        </div>
                    
                    
                    </div>
                    <div className='member'>
                        <div className='member-photo'>
                            <img src={peopleImage} alt="Logo TechnoPark" loading="lazy" />
                        </div> 
                        <div className='member-info'>
                            <div>

                            </div>
                            <h4>Имя фамилия</h4> 
                            
                            <p>Позиция</p>
                        </div>
                    
                    
                    </div>
                    <div className='member'>
                        <div className='member-photo'>
                            <img src={peopleImage} alt="Logo TechnoPark" loading="lazy" />
                        </div> 
                        <div className='member-info'>
                            <div>

                            </div>
                            <h4>Имя фамилия</h4> 
                            
                            <p>Позиция</p>
                        </div>
                    
                    
                    </div>
                    <div className='member'>
                        <div className='member-photo'>
                            <img src={peopleImage} alt="Logo TechnoPark" loading="lazy" />
                        </div> 
                        <div className='member-info'>
                            <div>

                            </div>
                            <h4>Имя фамилия</h4> 
                            
                            <p>Позиция</p>
                        </div>
                    
                    
                    </div>
                    <div className='member'>
                        <div className='member-photo'>
                            <img src={peopleImage} alt="Logo TechnoPark" loading="lazy" />
                        </div> 
                        <div className='member-info'>
                            <div>

                            </div>
                            <h4>Имя фамилия</h4> 
                            
                            <p>Позиция</p>
                        </div>
                    
                    
                    </div>
                    <div className='member'>
                        <div className='member-photo'>
                            <img src={peopleImage} alt="Logo TechnoPark" loading="lazy" />
                        </div> 
                        <div className='member-info'>
                            <div>

                            </div>
                            <h4>Имя фамилия</h4> 
                            
                            <p>Позиция</p>
                        </div>
                    
                    
                    </div>
                    <div className='member'>
                        <div className='member-photo'>
                            <img src={peopleImage} alt="Logo TechnoPark" loading="lazy" />
                        </div> 
                        <div className='member-info'>
                            <div>

                            </div>
                            <h4>Имя фамилия</h4> 
                            
                            <p>Позиция</p>
                        </div>
                    
                    
                    </div>
                    
                
                
                    
                    
                
                
                    
                    
                </div>
            </div>
            <div className='galleries'>
                <div className='gallery-head'>
                    <h4>Галерея</h4>
                </div>
                <div className='galleries-main'>
                    
                    <div className='gallery'>
                        <div className='gallery-photo'>
                            <img src={softImage} alt="Logo TechnoPark" loading="lazy" />
                        </div> 
                        <div className='gallery-info'>
                            
                            <p>Позиция</p>
                        </div>
                    
                    
                    </div>
                    <div className='gallery'>
                        <div className='gallery-photo'>
                            <img src={softImage} alt="Logo TechnoPark" loading="lazy" />
                        </div> 
                        <div className='gallery-info'>
                            
                            <p>Позиция</p>
                        </div>
                    
                    
                    </div>
                    <div className='gallery'>
                        <div className='gallery-photo'>
                            <img src={softImage} alt="Logo TechnoPark" loading="lazy" />
                        </div> 
                        <div className='gallery-info'>
                            
                            <p>Позиция</p>
                        </div>
                    
                    
                    </div>
                    <div className='gallery'>
                        <div className='gallery-photo'>
                            <img src={softImage} alt="Logo TechnoPark" loading="lazy" />
                        </div> 
                        <div className='gallery-info'>
                            
                            <p>Позиция</p>
                        </div>
                    
                    
                    </div>
                    <div className='gallery'>
                        <div className='gallery-photo'>
                            <img src={softImage} alt="Logo TechnoPark" loading="lazy" />
                        </div> 
                        <div className='gallery-info'>
                            
                            <p>Позиция</p>
                        </div>
                    
                    
                    </div>
                    <div className='gallery'>
                        <div className='gallery-photo'>
                            <img src={softImage} alt="Logo TechnoPark" loading="lazy" />
                        </div> 
                        <div className='gallery-info'>
                            
                            <p>Позиция</p>
                        </div>
                    
                    
                    </div>
                    <div className='gallery'>
                        <div className='gallery-photo'>
                            <img src={softImage} alt="Logo TechnoPark" loading="lazy" />
                        </div> 
                        <div className='gallery-info'>
                            
                            <p>Позиция</p>
                        </div>
                    
                    
                    </div>
                    <div className='gallery'>
                        <div className='gallery-photo'>
                            <img src={softImage} alt="Logo TechnoPark" loading="lazy" />
                        </div> 
                        <div className='gallery-info'>
                            
                            <p>Позиция</p>
                        </div>
                    
                    
                    </div>
                
                    
                    
                
                
                    
                    
                
                
                    
                    
                </div>
            </div>

            <Footer />
        </>
    );
}

export default About;