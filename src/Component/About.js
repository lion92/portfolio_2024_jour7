import React from 'react';
import './css/about.css'
import Header from "./Header";
import {LinearProgress} from "@mui/material";


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
                <h2>Java </h2>
                <LinearProgress style={{width: '40vw', margin: '50px auto'}}
                                variant="determinate" value={90}/>
                <h2>Spring </h2>
                <LinearProgress
                    style={{width: '40vw', margin: '50px auto'}}
                    variant="determinate" value={60}/>

                <h2>Javascrit </h2>
                <LinearProgress
                    style={{width: '40vw', margin: '50px auto'}}
                    variant="determinate" value={80}/>
                <h2>React </h2>
                <LinearProgress style={{width: '40vw', margin: '50px auto'}}
                                variant="determinate" value={60}/>
                <h2>Angular </h2>
                <LinearProgress
                    style={{width: '40vw', margin: '50px auto'}}
                    variant="determinate" value={60}/>



            </div>
        </div>
    );
};

export default About;