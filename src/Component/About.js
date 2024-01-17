import React from 'react';
import './css/about.css'
import Header from "./Header";
import Footer from "./Footer";


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

                    <div className=" wow fadeInUp container-skillbar" data-wow-delay="0.2s">
                        <div className="skillbar clearfix " data-percent="90%">
                            <div className="skillbar-title"><span>Java</span></div>
                            <div className="skillbar-bar"></div>
                            <div className="skill-bar-percent">90%</div>
                        </div>


                        <div className="skillbar clearfix " data-percent="80%">
                            <div className="skillbar-title"><span>Javascript</span></div>
                            <div className="skillbar-bar"></div>
                            <div className="skill-bar-percent">80%</div>
                        </div>


                        <div className="skillbar clearfix " data-percent="75%">
                            <div className="skillbar-title"><span>React</span></div>
                            <div className="skillbar-bar"></div>
                            <div className="skill-bar-percent">60%</div>
                        </div>


                        <div className="skillbar clearfix " data-percent="45%">
                            <div className="skillbar-title"><span>Angular</span></div>
                            <div className="skillbar-bar"></div>
                            <div className="skill-bar-percent">60%</div>
                        </div>

                        <div className="skillbar clearfix " data-percent="50%">
                            <div className="skillbar-title"><span>Spring</span></div>
                            <div className="skillbar-bar"></div>
                            <div className="skill-bar-percent">60%</div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;