import React from "react";

export default function Ruta({ ruta }) {
    return (
        <div>
            <h3> {ruta.name} </h3>
            <p>{ruta.location}</p>
            <span>{ruta.telephone}</span>
            <img src={ruta.image} alt="" />
        </div>
    )
}