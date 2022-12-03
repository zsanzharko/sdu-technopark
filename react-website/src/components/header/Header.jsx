import React from "react";
import './header.scss';
import {menu, admin_menu} from "./menu";
import {Link} from 'react-router-dom';
import logoImage from '../../assets/images/logo_new.svg';
import defaultAvatar from '../../assets/images/blank.svg';
import {useEffect, useState} from "react";
import jwt_decode from "jwt-decode";

const Header = () => {

    const [user, setUser] = useState({});

    function handleCallbackResponse(response) {
        let userObject = jwt_decode(response.credential);
        console.log(userObject);
        setUser(userObject);
        document.getElementById('sign-in').hidden = true;
    }

    function handleSignOut(event) {
        setUser({});
        document.getElementById('sign-in').hidden = false;
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "449942815359-c3h9k9ug468bj8p26jj68l45hic0geb1.apps.googleusercontent.com",
            callback: handleCallbackResponse,
        });

        google.accounts.id.renderButton(
            document.getElementById('sign-in'),
            { theme: 'outline', size: 'large' }
        );
    }, []);

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

                <div id='sign-in'></div>

                {Object.keys(user).length !== 0 &&
                    <div className="mini-profile">
                        <b>{user.name.split(' ')[0]}</b>
                        <div className="avatar-frame" onClick={(e) => showMenu()}>
                            <img src={defaultAvatar} alt="logo" loading="lazy" />

                            <div className="dropdown-menu">
                                <a>Profile</a>
                                <a>Settings</a>
                                <a onClick={(e) => handleSignOut(e)}>Sign out</a>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </nav>
    );
}


// Хз зачем нужен код снизу
// Но лучше не буду трогать
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
    );
}