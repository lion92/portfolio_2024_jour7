import React from 'react';
import ButtonPrincipal from "./ButtonPrincipal";
import Header from "./Header";

const Helloword = () => {
    return (
        <div>
         <Header></Header>
            <h1>Bienvenue dans l'application de gestion de budget.</h1>
            <a style={{color: "red"}} rel="kriss" href="https://projet.krissclotilde.com/" target="_blank">Qui suis
                je?</a>
        </div>
    );
};

export default Helloword;