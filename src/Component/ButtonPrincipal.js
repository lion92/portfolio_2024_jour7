import React from 'react';
import "./css/style.css"
const ButtonPrincipal = (props) => {
    let alerter=props.alerter;
    return (
        <div>
            <button onClick={alerter} className="custom-btn btn-5">{props.nom}</button>
        </div>
    );
};

export default ButtonPrincipal;