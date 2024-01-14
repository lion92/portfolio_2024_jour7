import React from 'react';
import './css/timeline.css'
import Header from "./Header";
const Timeline = () => {
    return (
        <div>
            <Header></Header>
            <div className="timeline">
                <article>
                    <h2>Professeur en Biochimie</h2>
                    <strong>Academie de versailles</strong>, en <em>2015-1016</em>
                </article>
                <article>
                    <h2>Développeur Java</h2>
                    <strong>Paris DSI</strong>, en <em>2017-2018</em>
                </article>
                <article>
                    <h2>Développeur Java</h2>
                    <strong>Montigny le Bretonneux Arkances</strong>, en <em>2019-2020</em>
                </article>
                <article>
                    <h2>Alternance Développeur Node Js</h2>
                    <strong>Paris Ideta</strong>, en <em>2021</em>
                </article>
                <article>
                    <h2>Software Crafter</h2>
                    <strong>Paris Arolla</strong>, en <em>2022-Actuellement</em>
                </article>
            </div>

        </div>
    );
};

export default Timeline;