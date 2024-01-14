import React from 'react';
import Header from "./Header";

const Helloword = () => {
    return (
        <div>

            <Header></Header>

            <h1 style={{textAlign:"center"}}>Bienvenue dans mon portfolio</h1>
            <div><img src="https://projet.krissclotilde.com/asset/avatar-gratuit.png" alt="photo de moi"
                      className="card__img"/></div>

        </div>
    );
};

export default Helloword;