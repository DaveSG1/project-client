import React from "react";
import { useHistory } from "react-router";

export default function Ruta({ ruta }) {

    const history = useHistory();

    function handleClick(e) {
        history.push("/ficha")
    }

    return (
        <div className="ruta">
            <h2> {ruta.name} </h2>
            <img src={ruta.photo} alt="" />
            <h3>{ruta.ccaa}</h3>
            <p>{ruta.location}</p>

            <button onClick={(e) => handleClick(e)}>Más información</button>
        </div>
    )
}