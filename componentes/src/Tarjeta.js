import React from "react";

function Tarjeta(props) {

    let experiencia=5

    return(
        <div>
            <h1>{props.Nombre}</h1>
            <h2>{props.Ocupacion}</h2>
            <p>Años de experiencia: {experiencia} años</p>
            <p>Actualmente se encuentra estudiando en la Ucreativa.</p>
        </div>
    )
}

export default Tarjeta