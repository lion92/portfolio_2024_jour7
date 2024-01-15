import React from 'react';
import './css/contact.css'
import Header from "./Header";
import Footer from "./Footer";

const CarteVisite = () => {
    return (
        <div>
<Header></Header>
            <h1>Carte de visite</h1>
            <div className="blanc">

                <h2>Kriss CLOTILDE</h2>
                <p>Developpeur fullstack</p>

                <ul>
                    <li><a href="https://www.linkedin.com/in/kriss-clotilde/"
                           target="_blank"
                    >Linkdin</a>
                    </li>
                </ul>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default CarteVisite;