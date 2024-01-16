import React from 'react';
import './css/timeline.css'
import Header from "./Header";

const Timeline = () => {
    return (
        <div>
            <Header></Header>
            <h1>Parcours</h1>
            <section className="timeline">
                <ul>
                    <li>
                        <div>
                            <time>2015-2016</time>
                            Professeur contractuel science de laboratoire
                            au lycée
                        </div>
                    </li>
                    <li>
                        <div>
                            <time>2018-2019</time>
                            Développeur java
                            DSI
                        </div>
                    </li>
                    <li>
                        <div>
                            <time>2019-2020</time>
                            Developpeur java
                            Arkance systems
                        </div>
                    </li>
                    <li>
                        <div>
                            <time> 2021</time>
                            Developpeur Node Js /Jest
                            Ideta

                        </div>
                    </li>
                    <li>
                        <div>
                            <time>2022-Actuellement</time>
                            Software Craftsman/Développeur FullStack
                            Arolla
                        </div>
                    </li>
                </ul>
            </section>

        </div>
    );
};

export default Timeline;