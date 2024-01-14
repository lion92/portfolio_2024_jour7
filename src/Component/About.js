import React from 'react';
import './css/about.css'
import Header from "./Header";
import Helloword from "./Helloword";

const About = () => {
    return (
        <div>
            <Header></Header>
            <Helloword></Helloword>
            <div className="section" data-anchor="skills">
                <h1 className="wow fadeInDown" data-wow-delay="0.2s">ABOUT
                ME</h1>
                <div className="content">

                    <p className="wow fadeInDown" data-wow-delay="0.2s">
                        Je suis kriss CLOTILDE, développeur en reconversion.
                        Je suis disponible pour une mission en java ou javascript.
                        J'aime le craft et les bonnes pratiques de programmations.

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

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;