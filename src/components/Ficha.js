import React from "react";
import { useHistory } from "react-router";


export default function Ficha({ ficha }) {

    const history = useHistory();

    function handleClick(e) {
        history.push("/reservas")
    }

    return (
        <div className="ruta">
            <h2> {ficha.name} </h2>
            <img src="http://www.aventurasacaballo.com/_include/img/work/full/rutas_horas/sanpedro09.jpg" alt=""/>   
        {/* TODO: la imagen posteriormente la tendre que poner en formato {} para que a cada ruta le asigne la suya */}
            <h3>{ficha.ccaa}</h3>
            <p>{ficha.address}</p>
            <p>{ficha.telephone}</p>
            <p>{ficha.email}</p>
            <p>{ficha.duration} horas</p>
            <p>{ficha.description}</p>
            <p>{ficha.level}</p>


            <button onClick={(e) => handleClick(e)}>Reservar</button>
        </div>
    )
}