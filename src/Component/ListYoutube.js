import React from 'react';
import Header from "./Header";
import './css/listProjets.css'
import Footer from "./Footer";


const ListYoutube = () => {
    return (
        <div style={{position:'relative'}}>
            <Header></Header>
            <h1>Projets</h1>
            <div className="container">

                <div className="card" id="list1">
                        <h2 style={{color:'black'}}>Video sur l'application de budget</h2>
                    <div className="card__body">
                        <iframe width="100%" height="200px"
                                src="https://www.youtube.com/embed/fUsnKCQSTSw?si=a-Us2c1X6xwNIh_t"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>
                </div>

                <div className="card" id="list1">
                    <h2 style={{color:'black'}}>Video sur mon tuto git itellij</h2>
                    <div className="card__body">
                        <iframe width="100%" height="200px"
                                src="https://www.youtube.com/embed/yP5rXUxOno0?si=AtuMsuEkpNtLCap9"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default ListYoutube;