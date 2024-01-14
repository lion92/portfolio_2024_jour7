import React from 'react';
import './css/header.css'
import {NavLink} from "react-router-dom";

const Header = () => {

    return (
        <>
            <header>
                <nav>
                    <div className="logo">
                        <h5>Kriss CLOTILDE</h5>
                    </div>
                    <ul className="menu">
                        <li><NavLink to={"/About"}>
                            <li>about</li>
                        </NavLink></li>
                        <li><NavLink to={"/Projets"}>
                            <li>Projets</li>
                        </NavLink></li>
                        <li><NavLink to={"/Contact"}>
                            <li>Contact</li>
                        </NavLink></li>
                    </ul>
                    <div className="bar">
                        <div className="bar-1"></div>
                        <div className="bar-2"></div>
                        <div className="bar-3"></div>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header;