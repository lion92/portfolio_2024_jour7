import React from 'react';
import Header from "./Header";
import './css/listProjets.css'
import Footer from "./Footer";
import {NavLink} from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import BulleComponent from "./bulleComponent";
import photomoi from "./image/lion.png";


const ListProjets = () => {
    return (
        <div>
            <Header></Header>
            <BulleComponent></BulleComponent>
            <button><NavLink to={"/article"}>
                <MenuItem><h2 className="menuTitle">Articles </h2></MenuItem>
            </NavLink></button>

            <h1>Projets</h1>
            <div className="container">

                <a target="_blank" rel="noreferrer" href="https://gestiontaches.krissclotilde.com/">
                    <div className="card" id="list1">

                        <div className="card__body">
                            <img src={photomoi}
                                 alt="photodemoi"
                                 className="card__img"/>
                            <h3
                                className="card__title">Application de type budget "Le site"</h3>
                        </div>
                    </div>
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/lion92/nest_api_2">
                <div className="card" id="list1">

                    <div className="card__body">

                        <img src={photomoi}
                             alt="photodemoi"
                             className="card__img"/>
                        <h3
                            className="card__title">Application de type budget "Back"</h3>
                    </div>
                </div>
                </a>

                <a target="_blank" rel="noreferrer" href="https://github.com/lion92/budget_suite">
                <div className="card" id="list1">

                    <div className="card__body">

                        <img src={photomoi}
                             alt="photodemoi"
                             className="card__img"/>
                        <h3
                            className="card__title">Application de type budget "Front"</h3>
                    </div>
                </div>
                </a>

                <a target="_blank" rel="noreferrer" href="https://github.com/lion92/marsRoverVersion3">
                    <div className="card" id="list2">

                        <div className="card__body">
                            <img src={photomoi}
                                 alt="photodemoi"
                                 className="card__img"/>
                            <h3
                                className="card__title"> kata de code</h3>

                        </div>

                    </div>
                </a>

                <a target="_blank" rel="noreferrer" href="https://github.com/lion92/kata_tondeuse_v1_kriss">
                    <div className="card" id="list3">

                        <div className="card__body">
                            <img src={photomoi}
                                 alt="photodemoi"
                                 className="card__img"/>
                            <h3
                                className="card__title">kata de
                                code</h3>

                        </div>

                    </div>
                </a>
                <a target="_blank" rel="noreferrer" href="https://contact.krissclotilde.com/">
                <div className="card" id="list4">

                    <div className="card__body">
                        <img src={photomoi}
                                 alt="photodemoi"
                                 className="card__img"/>
                        <h3
                            className="card__title">Site de
                            type CV</h3>

                    </div>


                </div>
            </a>
                <a target="_blank" rel="noreferrer" href="https://projet.krissclotilde.com/">
                <div className="card" id="list5">

                    <div className="card__body">
                        <img src={photomoi}
                                 alt="photodemoi"
                                 className="card__img"/>
                        <h3
                            className="card__title">Mon ancien site de type CV</h3>

                    </div>

                </div>
            </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/lion92/projet_tdd_js_fizz_buzz">
                <div className="card" id="list6">

                    <div className="card__body">
                        <img src={photomoi}
                                 alt="photodemoi"
                                 className="card__img"/>
                        <h3
                            className="card__title">kata FizzBuzz</h3>

                    </div>

                </div>
            </a>
                <a target="_blank" rel="noreferrer" href="https://blog2024.krissclotilde.com/">
                <div className="card" id="list7">
                    <div className="card__body">
                        <img src={photomoi}
                                 alt="photodemoi"
                                 className="card__img"/>
                        <h3
                            className="card__title">Création de mon blog d'articles</h3>

                    </div>

                </div>
            </a>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default ListProjets;