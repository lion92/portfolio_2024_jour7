import React from 'react';
import Header from "./Header";
import './css/listProjets.css'
import Footer from "./Footer";
import {NavLink} from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";


const ListProjets = () => {
    return (
        <div>
            <Header></Header>
            <button><NavLink to={"/article"}>
                <MenuItem><h2 className="menuTitle">Articles </h2></MenuItem>
            </NavLink></button>

            <h1>Projets</h1>
            <div className="container">

                <div className="card" id="list1">
                    <img src="https://projet.krissclotilde.com/asset/todo.png" alt="application de budget"
                         className="card__img"/>
                    <div className="card__body">
                        <a target="_blank" rel="noreferrer" href="https://gestiontaches.krissclotilde.com/"><h3
                            className="card__title">Application de type budget "Le site"</h3></a>
                    </div>
                </div>

                <div className="card" id="list1">
                    <img src="https://projet.krissclotilde.com/asset/todo.png" alt="application de budget back"
                         className="card__img"/>
                    <div className="card__body">
                        <a target="_blank" rel="noreferrer" href="https://github.com/lion92/nest_api_2"><h3
                            className="card__title">Application de type budget "Back"</h3></a>
                    </div>
                </div>

                <div className="card" id="list1">
                    <img src="https://projet.krissclotilde.com/asset/todo.png" alt="application de budget back"
                         className="card__img"/>
                    <div className="card__body">
                        <a target="_blank" rel="noreferrer" href="https://github.com/lion92/budget_suite"><h3
                            className="card__title">Application de type budget "Front"</h3></a>
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
                        <a target="_blank" rel="noreferrer" href="https://contact.krissclotilde.com/"><h3
                            className="card__title">Site de
                            type CV</h3></a>

                    </div>


                </div>
                <div className="card" id="list5">
                    <img src="https://projet.krissclotilde.com/asset/Lion%20Mascot%20Logo.png" alt="site de type cv"
                         className="card__img"/>
                    <div className="card__body">
                        <a target="_blank" rel="noreferrer" href="https://projet.krissclotilde.com/"><h3
                            className="card__title">Mon ancien site de type CV</h3></a>

                    </div>

                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default ListProjets;