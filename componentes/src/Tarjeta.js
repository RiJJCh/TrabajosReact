import React, { useState } from "react";

function Tarjeta(props) {

    const [años,setAños]=useState(5)

    function aumentarAños(){
        setAños(años+1)
    }

    function disminuirAños(){
        setAños(años-1)
    }

    return(
        <div>
            <h1>{props.Nombre}</h1>
            <h2>{props.Ocupacion}</h2>
            <p>Años de experiencia: {años} años</p>
            <p>Actualmente se encuentra estudiando en la Ucreativa.</p>
            <button onClick={aumentarAños}>Aumentar años</button>
            <button onClick={disminuirAños}> Disminuir años</button>
        </div>
    )
}

export default Tarjeta