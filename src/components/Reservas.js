import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Reservas() {
  const [routeDetails, setRouteDetails] = useState([]);

  const { id } = useParams();

  /* console.log("reading id", id); */

  let URL = `http://localhost:8000/api/rides/read/booking/see/${id}`;

  useEffect(() => {
    fetch(URL)
      .then((r) => r.json())
      .then((data) => setRouteDetails(data["data"][0]));
  }, [URL]);

  return (
    <div className="reservas">
      <h3>Reservar una ruta</h3>

      <form action="#" method="POST">
        <label htmlFor="contactRoute">Ruta de interés:</label>
        <p className="routeTitle">{routeDetails.name}</p>

        <label htmlFor="contactDate">Fecha de interés:</label>
        <select className="select" name="availability" id="">
          {routeDetails.rideAvailabilities?.map((datetime) => {
            return <option value="datetime.id">{datetime.datetime}</option>;
          })}
        </select>

        <label htmlFor="contactName">Nombre:</label>
        <input
          type="text"
          name="contactName"
          id="contactName"
          required
          placeholder="Introduzca su nombre"
        />

        <label htmlFor="contactLastname">Apellidos:</label>
        <input
          type="text"
          name="contactLastname"
          id="contactLastname"
          required
          placeholder="Introduzca su(s) apellido(s)"
        />

        <label htmlFor="contactEmail">Email:</label>
        <input
          type="email"
          name="contactEmail"
          id="contactEmail"
          required
          placeholder="Ej: nombre@gmail.com"
        />

        <label htmlFor="contactMessage">Mensaje:</label>
        <textarea
          name="contactMessage"
          id="contactMessage"
          placeholder="Si desea hacer alguna aclaración o comentario, por favor indíquelo aquí. En cuanto recibamos su solicitud y comprobemos la disponibilidad para la ruta y fechas seleccionadas, nos pondremos en contacto con usted."
        ></textarea>

        <button className="button" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}
