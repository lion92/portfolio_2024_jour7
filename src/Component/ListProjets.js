import React from 'react';
import Header from "./Header";
import './css/listProjets.css'
import Footer from "./Footer";


const ListProjets = () => {
    return (
        <div>
            <Header></Header>
            <h1>Projets</h1>
            <div className="container">

                <div className="card" id="list1">
                    <img src="https://projet.krissclotilde.com/asset/todo.png" alt="application de budget"
                         className="card__img"/>
                    <div className="card__body">
                        <a target="_blank" rel="noreferrer" href="https://gestiontaches.krissclotilde.com/"><h3
                            className="card__title">Application de type budget</h3></a>
                    </div>
                </div>

                <div className="card" id="list2">
                    <img src="https://projet.krissclotilde.com/asset/mars.png" alt="kata de code"
                         className="card__img"/>
                    <div className="card__body">
                        <a target="_blank" rel="noreferrer" href="https://github.com/lion92/marsRoverVersion3"><h3
                            className="card__title"> kata de code</h3></a>

                    </div>

                </div>

                <div className="card" id="list3">
                    <img src="https://projet.krissclotilde.com/asset/tondeuse.png" alt="kata de code"
                         className="card__img"/>
                    <div className="card__body">
                        <a target="_blank" rel="noreferrer" href="https://github.com/lion92/kata_tondeuse_v1_kriss"><h3
                            className="card__title">kata de
                            code</h3></a>

                    </div>

                </div>

                <div className="card" id="list4">
                    <img src="https://projet.krissclotilde.com/asset/Lion%20Mascot%20Logo.png" alt="site de type cv"
                         className="card__img"/>
                    <div className="card__body">
                        <a target="_blank" rel="noreferrer" href="https://contact.krissclotilde.com/"><h3 className="card__title">Site de
                            type cv</h3></a>

                    </div>

                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default ListProjets;