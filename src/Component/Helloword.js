import React from 'react';
import Header from "./Header";
import './css/helloWorld.css'
import Footer from "./Footer";
const Helloword = () => {
    return (
        <div>

            <Header></Header>

            <h1 style={{textAlign:"center"}}>Bienvenue dans mon portfolio</h1>
            <div className="photo"><img src="https://projet.krissclotilde.com/asset/avatar-gratuit.png" alt="photo de moi"
                      className="card__img"/></div>
            <Footer></Footer>

        </div>
    );
};

export default Helloword;