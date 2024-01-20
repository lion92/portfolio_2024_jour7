import React from 'react';
import Header from "./Header";
import './css/helloWorld.css'
import Footer from "./Footer";
import {NavLink} from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";

const Helloword = () => {
    return (
        <div>

            <Header></Header>
            <button><NavLink to={"/About"}>
                <MenuItem><h2 className="menuTitle">A Propos </h2></MenuItem>
            </NavLink></button>
            <h1 style={{textAlign: "center"}}>Bienvenue dans mon portfolio</h1>
            <div className="photo"><img src="https://projet.krissclotilde.com/asset/avatar-gratuit.png"
                                        alt="photodemoi"
                                        className="card__img"/></div>
            <Footer></Footer>

        </div>
    );
};

export default Helloword;