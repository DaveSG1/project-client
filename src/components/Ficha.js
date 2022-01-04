import React from "react";
import { useHistory } from "react-router";


export default function Ficha({ ruta }) {

    const history = useHistory();

    function handleClick(e) {
        history.push("/reservas")
    }



    return (
        <div className="ruta">
            <h2> {ruta.name} </h2>
            <h3>{ruta.ccaa}</h3>
            <p>{ruta.location}</p>
            <p>Teléfono: {ruta.telephone}</p>
            <img src={ruta.image} alt="" />
            <button onClick={(e) => handleClick(e)}>Reservar la ruta</button>
        </div>
    )
}