import React from "react";
import './header.scss';
import './../buttons/google-button.scss';
import { menu, admin_menu } from "./menu";

import logoImage from '../../assets/images/logo/logo_120.png';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        // Navbar
        <nav class="navbar navbar-expand-lg shadow" >
            <div class="container-fluid">
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <Link className="header-logo" to="/">
                    <img src={logoImage} alt="Logo TechnoPark" loading="lazy" />
                </Link>
                <div className="smth">    
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">{menu.map((item, idx) => (
                        
                        <li className="nav-item" key={`menu key ${idx}`}>
                            <Link to={item.link}>{item.title}</Link>
                        </li>))}
                        <li>
                            <div className="google-btn">
                                <div className="google-icon-wrapper">
                                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                                </div>
                                <p className="btn-text"><b>Sign in with google</b></p>
                            </div>
                        </li>
                    </ul>
                    </div>
                    {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#">О нас</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Актуальное</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Сотрудничество</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Контакты</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">FAQ</a>
                        </li>
                    </ul> */}
                </div>

                
            </div>
        </nav>
    )
}

export default Header;

export const AdminHeader = () => {
    return (
        <header className="main-header">
            <Link className="header-logo" to="/">
                <img
                    src={logoImage}
                    alt="Logo TechnoPark"
                    loading="lazy" />
            </Link>
            <nav>
                <ul>{admin_menu.map((item, idx) => (
                    <li key={`menu key ${idx}`}>
                        <Link to={item.link}>{item.title}</Link>
                    </li>
                ))}
                </ul>
            </nav>

        </header>
    )
}