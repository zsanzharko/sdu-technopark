import React from "react";
import './header.scss';
import './../buttons/google-button.scss';
import { menu, admin_menu } from "./menu";
import logo from './logo.png';

import logoImage from '../../assets/images/logo/logo_120.png';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        // Navbar
        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
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
                    <a class="navbar-brand mt-2 mt-lg-0" href="#">
                        <img
                            src={"logo"}
                            height="30"
                            alt="Logo"
                            loading="lazy"
                        />
                    </a>

                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
                    </ul>
                </div>

                <div class="d-flex align-items-center">
                    <a
                        type="button"
                        class="btn btn-outline-primary btn-outline-sdu"
                    >
                        Вход
                    </a>

                    <div class="dropdown">
                        <a
                            class="dropdown-toggle d-flex align-items-center hidden-arrow caret"
                            href="#"
                            id="navbarDropdownMenuAvatar"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <img
                                class="rounded-circle"
                                height="30"
                                alt="Blank"
                                loading="lazy"
                            />
                        </a>

                        <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuAvatar">
                            <li>
                                <a class="dropdown-item" href="#">Профиль</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Настройки</a>
                            </li>
                            <li>
                                <a class="dropdown-item">Выход</a>
                            </li>
                        </ul>
                    </div>
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