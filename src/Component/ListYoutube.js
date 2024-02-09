import React from 'react';
import Header from "./Header";
import './css/listProjets.css'
import Footer from "./Footer";
import MenuItem from "@mui/material/MenuItem";
import {NavLink} from "react-router-dom";
import BulleComponent from "./bulleComponent";


const ListYoutube = () => {
    return (
        <div style={{position: 'relative'}}>
            <Header></Header>
            <BulleComponent></BulleComponent>
            <button><NavLink to={"/Parcours"}>
                <MenuItem><h2 className="menuTitle">Parcours </h2></MenuItem>
            </NavLink></button>

            <h1>You tube</h1>
            <div className="container">

                <div className="card" id="list1">
                    <h3 style={{color: 'black'}}>Video sur l'application de budget</h3>
                    <div className="card__body">
                        <iframe width="100%" height="200px"
                                src="https://www.youtube.com/embed/fUsnKCQSTSw?si=a-Us2c1X6xwNIh_t"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>
                </div>

                <div className="card" id="list2">
                    <h3 style={{color: 'black'}}>Video sur mon tuto git intellij</h3>
                    <div className="card__body">
                        <iframe width="100%" height="200px"
                                src="https://www.youtube.com/embed/yP5rXUxOno0?si=AtuMsuEkpNtLCap9"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>
                </div>
                <div className="card" id="list3">
                    <h3 style={{color: 'black'}}>Video portfolio 2024</h3>
                    <div className="card__body">
                        <iframe width="100%" height="200px"
                                src="https://www.youtube.com/embed/z-gmmfedpH4?si=8R2TW-O1rKzXSbkB"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>
                </div>
                <div className="card" id="list4">
                    <h3 style={{color: 'black'}}>Video portfolio 2024 Jour 7</h3>
                    <div className="card__body">
                        <iframe width="100%" height="200px"
                                src="https://www.youtube.com/embed/8eyR39lNhTg?si=HTMBUJ8ihru7Hkjj"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>
                </div>
                <div className="card" id="list5">
                    <h3 style={{color: 'black'}}>Création de mon blog d'articles Front</h3>
                    <div className="card__body">
                        <iframe width="100%" height="200px"
                                src="https://www.youtube.com/embed/Hp3Z0Ayj5wA?si=0LTvK1WTNpTg4gO9"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>
                </div>
                <div className="card" id="list6">
                    <h3 style={{color: 'black'}}>Création de mon blog d'articles Back</h3>
                    <div className="card__body">
                        <iframe width="100%" height="200px"
                                src="https://www.youtube.com/embed/p3bjQL6HLto?si=-r2RXxKmpXhqwI3U"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>
                </div>
                <div className="card" id="list6">
                    <h3 style={{color: 'black'}}>Tuto sur nginx</h3>
                    <div className="card__body">
                        <iframe width="100%" height="200px"
                                src="https://www.youtube.com/embed/N1N0wb4R3tE?si=5TMFyB711MkdeYTg"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default ListYoutube;