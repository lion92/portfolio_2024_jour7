import React from 'react';
import './css/helloWorld.css'

import MenuItem from "@mui/material/MenuItem";
import BulleComponent from "./bulleComponent";
import {NavLink} from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import photomoi from './image/avatar-gratuit.png';
const Helloword = () => {
    return (
        <div>

            <Header></Header>
          <BulleComponent></BulleComponent>
            <button><NavLink to={"/About"}>
                <MenuItem><h2 className="menuTitle">A Propos </h2></MenuItem>
            </NavLink></button>
            <h1 className="bienvenue">Bienvenue dans mon portfolio</h1>
            <div className="photo"><img src={photomoi}
                                        alt="photodemoi"
                                        className="card__img"/></div>
            <Footer></Footer>

        </div>
    );
};

export default Helloword;