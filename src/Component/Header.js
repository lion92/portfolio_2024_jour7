import React from 'react';
import './css/header.css'

const Header = () => {

    return (
        <>
            <header>
                <nav>
                    <div className="logo">
                        <h5>Kriss CLOTILDE</h5>
                    </div>
                    <ul className="menu">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Projets</a></li>
                        <li><a href="#">Contact</a></li>
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