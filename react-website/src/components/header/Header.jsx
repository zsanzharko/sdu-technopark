import React from "react";
import './header.scss'
import './../buttons/google-button.scss';
import { menu, admin_menu } from "./menu";

import logoImage from '../../assets/images/logo/logo_120.png';

import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="main-nav">
            <div className="header-wrapper">
                <Link className="header-logo" to="/">
                    <img src={logoImage} alt="Logo TechnoPark" loading="lazy" />
                </Link>
                
                    <ul>{menu.map((item, idx) => (
                        <li key={`menu key ${idx}`}>
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
        </nav>
    )
}

function myFunction(x) {
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
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