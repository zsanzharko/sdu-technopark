import React from "react";
import './header.scss';
import './../buttons/google-button.scss';
import { menu, admin_menu } from "./menu";
import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/logo_new.svg';
import defaultAvatar from '../../assets/images/blank.svg';

const Header = () => {
    return (
        <nav className="main-nav">
            <div className="header-wrapper">
                <Link className="header-logo" to="/">
                    <img src={logoImage} alt="logo" loading="lazy" />
                </Link>

                <ul>{menu.map((item, idx) => (
                    <li key={`menu key ${idx}`}>
                        <Link to={item.link}>{item.title}</Link>
                    </li>))}
                </ul>

                <div className="signed-in">
                    <b>Sanzhar</b>
                    <div className="avatar-frame">
                        <img src={defaultAvatar} alt="logo" loading="lazy" />
                    </div>
                </div>
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