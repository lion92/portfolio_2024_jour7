import React from 'react';
import './css/about.css'
import Header from "./Header";
import {LinearProgress} from "@mui/material";
import { FaJava } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiSpring } from "react-icons/si";
import { FaAngular } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
const About = () => {
    return (
        <div>
            <Header></Header>
            <div className="section" data-anchor="skills">
                <h1 style={{color: "black"}}>A PROPOS DE MOI</h1>
                <div className="content">

                    <p style={{fontSize: "30px", color: "black", textTransform: 'initial'}}>
                        Je suis kriss CLOTILDE, développeur en reconversion. <br/>
                        Je suis disponible pour une mission en java ou javascript. <br/>
                        J'aime le craft et les bonnes pratiques de programmations. <br/>
                        Je vise les étoiles pour au moins décrocher la lune.</p>


                </div>
                <div><h2><FaJava style={{
                    fontSize: '40px'
                }}/>Java </h2>
                    <LinearProgress style={{width: '40vw', margin: '50px auto'}}
                                    variant="determinate" value={90}/>
                    <h2><SiSpring style={{
                        fontSize: '40px'
                    }}/>Spring </h2>
                    <LinearProgress
                        style={{width: '40vw', margin: '50px auto'}}
                        variant="determinate" value={60}/>

                    <h2><RiJavascriptFill style={{
                        fontSize: '40px'
                    }}/>Javascrit </h2>
                    <LinearProgress
                        style={{width: '40vw', margin: '50px auto'}}
                        variant="determinate" value={80}/>
                    <h2><FaReact style={{
                        fontSize: '40px'
                    }}/>React </h2>
                    <LinearProgress style={{width: '40vw', margin: '50px auto'}}
                                    variant="determinate" value={60}/>
                    <h2><FaAngular style={{
                        fontSize: '40px'
                    }}/>Angular </h2>
                    <LinearProgress
                        style={{width: '40vw', margin: '50px auto'}}
                        variant="determinate" value={60}/>

                </div>


            </div>
        </div>
    );
};

export default About;