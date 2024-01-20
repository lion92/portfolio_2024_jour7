import React from 'react';
import './css/about.css'
import Header from "./Header";
import {LinearProgress} from "@mui/material";
import {FaJava, FaReact} from "react-icons/fa";
import {RiJavascriptFill} from "react-icons/ri";
import {SiSpring} from "react-icons/si";
import {FaAngular} from "react-icons/fa6";
import Footer from "./Footer";
import {NavLink} from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";

const About = () => {

    return (
        <div>
            <Header></Header>
            <button> <NavLink to={"/Projets"}>
                <MenuItem><h2 className="menuTitle">Projets </h2></MenuItem>
            </NavLink></button>

            <div className="section" data-anchor="skills">
                <h1 style={{color: "white"}}>A PROPOS DE MOI</h1>
                <div className="content">

                    <p className="about">
                        Je suis kriss CLOTILDE, développeur en reconversion. <br/>
                        Je suis disponible pour une mission en java ou javascript. <br/>
                        J'aime le craft et les bonnes pratiques de programmations. <br/>
                        Je vise les étoiles pour au moins décrocher la lune.</p>


                </div>
                <div className="section">
                    <div><h2><FaJava style={{

                    }}/>Java </h2>
                        <LinearProgress className="aboutTechno" style={{ margin: '9px auto'}}
                                        variant="determinate" value={90}/>
                        <h2><SiSpring style={{

                        }}/>Spring </h2>
                        <LinearProgress className="aboutTechno"
                            style={{ margin: '9px auto'}}
                            variant="determinate" value={60}/>

                        <h2><RiJavascriptFill style={{

                        }}/>Javascrit </h2>
                        <LinearProgress className="aboutTechno"
                            style={{ margin: '9px auto'}}
                            variant="determinate" value={80}/>
                        <h2><FaReact style={{

                        }}/>React </h2>
                        <LinearProgress className="aboutTechno" style={{margin: '9px auto'}}
                                        variant="determinate" value={60}/>
                        <h2><FaAngular style={{
                            fontSize: '40px'
                        }}/>Angular </h2>
                        <LinearProgress className="aboutTechno"
                            style={{ margin: '9px auto'}}
                            variant="determinate" value={60}/>
                    </div>

                </div>


            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;