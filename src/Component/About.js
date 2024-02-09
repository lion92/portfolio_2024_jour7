import React from 'react';
import './css/about.css'
import Header from "./Header";
import {LinearProgress} from "@mui/material";
import {FaJava, FaReact} from "react-icons/fa";
import {RiJavascriptFill} from "react-icons/ri";
import {SiSpring} from "react-icons/si";
import {FaAngular} from "react-icons/fa6";
import {NavLink} from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import BulleComponent from "./bulleComponent";

const About = () => {

    return (
        <div>
            <Header></Header>
            <BulleComponent></BulleComponent>
            <button><NavLink to={"/Projets"}>
                <MenuItem><h2>Projets </h2></MenuItem>
            </NavLink></button>
            <div className="section">
                <div className="section" data-anchor="skills">
                    <h1 style={{color: "white"}}>A PROPOS</h1>
                    <div className="content">

                        <p style={{fontSize: "30px", color: "gold", textTransform: 'initial'}} className="about">
                            Je suis kriss CLOTILDE, développeur en reconversion. <br/>
                            Je suis disponible pour une mission en java ou javascript. <br/>
                            J'aime le craft et les bonnes pratiques de programmations. <br/>
                        </p>
                        <br/>
                        <p style={{fontSize: "30px", color: "gold", textTransform: 'initial'}} className="about">
                            Mes passions sont les cartes magics, prier et méditer,<br/> les jeux de stratégies et
                            découvrir
                            de nouveaux resto. <br/>
                        </p>
                        <br/>
                        <p style={{
                            fontSize: "30px", color: "blue" +
                                "", textTransform: 'initial'
                        }}>Je vise les étoiles pour au moins décrocher la lune.</p>
                    </div>
                    <div className="section">
                        <div className="techno"><h2><FaJava style={{}}/>Java </h2>
                            <LinearProgress className="aboutTechno" style={{margin: '9px auto'}}
                                            variant="determinate" value={90}/>
                            <h2><SiSpring style={{}}/>Spring </h2>
                            <LinearProgress className="aboutTechno"
                                            style={{margin: '9px auto'}}
                                            variant="determinate" value={60}/>

                            <h2><RiJavascriptFill style={{}}/>Javascrit </h2>
                            <LinearProgress className="aboutTechno"
                                            style={{margin: '9px auto'}}
                                            variant="determinate" value={80}/>
                            <h2><FaReact style={{}}/>React </h2>
                            <LinearProgress className="aboutTechno" style={{margin: '9px auto'}}
                                            variant="determinate" value={60}/>
                            <h2><FaAngular style={{
                                fontSize: '40px'
                            }}/>Angular </h2>
                            <LinearProgress className="aboutTechno"
                                            style={{margin: '9px auto'}}
                                            variant="determinate" value={60}/>
                        </div>

                    </div>


                </div>

            </div>
        </div>
    );
};

export default About;