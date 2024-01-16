import React from 'react';
import './css/header.css'
import {NavLink} from "react-router-dom";


const Header = () => {

    return (
        <>
            <header>
                <nav>
                    <div className="logo">
                        <NavLink to={"/"}>
                            <h5>Kriss CLOTILDE</h5>
                        </NavLink>
                    </div>
                    <ul className="menu">
                        <li><NavLink to={"/About"}>
                            <li>About</li>
                        </NavLink></li>
                        <li><NavLink to={"/Projets"}>
                            <li>Projets</li>
                        </NavLink></li>
                        <li>
                            <NavLink to={"/Parcours"}>
                                <li>Parcours</li>
                            </NavLink></li>
                        <li><NavLink to={"/Contact"}>
                            <li>Contact</li>
                        </NavLink></li>
                    </ul>

                </nav>
            </header>

        </>
    )
}
export default Header;