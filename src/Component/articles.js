import React from 'react';
import Header from "./Header";
import './css/articles.css'
import Gist from "react-gist";
import {NavLink} from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";


const Articles = () => {
    return (
        <div>
            <Header></Header>
            <button><NavLink to={"/youtube"}>
                <MenuItem><h2 className="menuTitle">You tube</h2></MenuItem>
            </NavLink></button>

            <h1>Comment créer un projet React app</h1>
            <h2>J'ai crée un projet react app avec un router et material ui d'intégré pour pour utiliser la librairie de
                composant.</h2>
            <p>Il suffit de faire un git clone de https://github.com/lion92/blog_kriss.git</p>
            <div className="clone_git">
                <Gist id="99b008bf95608a47a3c1db1ded4c257a"/>
            </div>
            <h2 style={{color:"wheat"}}>Pour creer le projet faire:</h2>
            <ul>
                <li style={{color:"wheat"}}>npx create-react-app nom_du_projet</li>
                <li style={{color:"wheat"}}>cd nom_du_projet</li>
                <li style={{color:"wheat"}}>integrer le fichier index.js dans src</li>
                <li style={{color:"wheat"}}>
                    <div className="clone_git">
                        <Gist id="36f33038792cffdabce8e2c93c12dc02"/>
                    </div>
                </li>
                <li style={{color:"wheat"}}>npm uninstall react-router-dom</li>
                <li style={{color:"wheat"}}>npm install react-router-dom@5.2.0</li>
                <li style={{color:"wheat"}}>Creer un composent HelloWorld</li>
                <li style={{color:"wheat"}}>Le mettre au niveau du router</li>
                <li style={{color:"wheat"}}>npm start</li>
            </ul>

        </div>
    );
};

export default Articles;