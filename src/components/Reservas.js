import React from "react";
/* import { useHistory } from "react-router"; */

export default function Reservas() {

    /* const history = useHistory();

    function handleClick(e) {
        history.push("/ficha")
    }  */

    return (
        <div className="reservas">
            <h3>Reservar una ruta</h3>
            <form action="#" method="POST">

                <label htmlFor="contactRoute">Ruta de interés:</label>
                <input type="text" name="contactRoute" id="contactRoute" required placeholder="Indique el nombre de la ruta deseada" />

                <label htmlFor="contactDate">Fecha de interés:</label>
                <input type="date" name="contactDate" id="contactDate" required />

                <label htmlFor="contactName">Nombre:</label>
                <input type="text" name="contactName" id="contactName" required placeholder="Introduzca su nombre" />

                <label htmlFor="contactLastname">Apellidos:</label>
                <input type="text" name="contactLastname" id="contactLastname" required placeholder="Introduzca su(s) apellido(s)" />

                <label htmlFor="contactEmail">Email:</label>
                <input type="email" name="contactEmail" id="contactEmail" required placeholder="Ej: nombre@gmail.com" />

                <label htmlFor="contactMessage">Mensaje:</label>
                <textarea name="contactMessage" id="contactMessage" placeholder="Si desea hacer alguna aclaración o comentario, por favor indíquelo aquí. En cuanto recibamos su solicitud y comprobemos la disponibilidad para la ruta y fechas seleccionadas, nos pondremos en contacto con usted."></textarea>

                <button className="button" type="submit">Enviar</button>
            </form>
        </div>
    )
}