import React from "react";
import './header.scss';
import './../buttons/google-button.scss';

import { menu } from "./menu";
import { Link } from 'react-router-dom';

import logoImage from '../../assets/images/logo/logo_120.png';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg shadow" >
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <Link className="header-logo" to="/">
                    <img src={logoImage} alt="Logo TechnoPark" loading="lazy" />
                </Link>
                <div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">{menu.map((item, idx) => (
                        <li className="nav-item" key={`menu key ${idx}`}>
                            <Link to={item.link}>{item.title}</Link>
                        </li>))}
                        <li>
                            <div className="google-btn">
                                <div className="google-icon-wrapper">
                                    <img className="google-icon" alt={'Google logo'} src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                                </div>
                                <p className="btn-text"><b>Sign in with google</b></p>
                            </div>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;