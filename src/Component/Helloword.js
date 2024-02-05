import React from 'react';
import Header from "./Header";
import './css/helloWorld.css'
import Footer from "./Footer";
import {NavLink} from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import BulleComponent from "./bulleComponent";

const Helloword = () => {
    return (
        <div>

            <Header></Header>
          <BulleComponent></BulleComponent>
            <button><NavLink to={"/About"}>
                <MenuItem><h2 className="menuTitle">A Propos </h2></MenuItem>
            </NavLink></button>
            <h1 className="bienvenue">Bienvenue dans mon portfolio</h1>
            <div className="photo"><img src="https://projet.krissclotilde.com/asset/avatar-gratuit.png"
                                        alt="photodemoi"
                                        className="card__img"/></div>
            <Footer></Footer>

        </div>
    );
};

export default Helloword;