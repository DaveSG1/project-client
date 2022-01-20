import React from "react";
import { useHistory } from "react-router";


export default function Ficha({ ficha }) {

    const history = useHistory();

    function handleClick(e) {
        history.push("/reservas")
    }



    return (
        <div className="ruta">
            <h2> {ficha[0].name} </h2>
            <img src={ficha[0].photo} alt="" />
            <h3>{ficha[0].ccaa}</h3>
            <p>{ficha[0].address}</p>
            <p>{ficha[0].telephone}</p>
            <p>{ficha[0].email}</p>
            <p>{ficha[0].duration}</p>
            <p>{ficha[0].description}</p>
            <p>{ficha[0].level}</p>


            <button onClick={(e) => handleClick(e)}>Reservar</button>
        </div>
    )
}