import React from "react";
import { useParams } from "react-router-dom";

export default function EditRouteForm() {

  let {id} = useParams();

  function handlePut() {
    const ccaa = document.getElementById("ccaa").value;
    const name = document.getElementById("name").value;
    const location = document.getElementById("location").value;
    const address = document.getElementById("address").value;
    const telephone = document.getElementById("telephone").value;
    const duration = document.getElementById("duration").value;
    const description = document.getElementById("description").value;
    const level = document.getElementById("level").value;  

    fetch(`http://localhost:8000/admin/rides/edit/${id}`, {
      
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        ccaa: ccaa,
        name: name,
        location: location,
        address: address,
        telephone: telephone,
        duration: duration,
        description: description,
        level: level,
      }),
    }).then().then();
  }

  return (
    <div className="post">
      <h3>Modificar la ruta</h3>

      <form action="#" method="PUT">
        <label htmlFor="ccaa">Comunidad autónoma:</label>
        <input
          type="text"
          name="ccaa"
          id="ccaa"
          required
          placeholder="Introduzca la comunidad autónoma"
        />

        <label htmlFor="name">Nombre ruta:</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="Introduzca el nombre de la ruta"
        />

        <label htmlFor="location">Localidad:</label>
        <input
          type="text"
          name="location"
          id="location"
          required
          placeholder="Introduzca la localidad"
        />

        <label htmlFor="address">Dirección:</label>
        <input
          type="text"
          name="address"
          id="address"
          required
          placeholder="Introduzca la dirección"
        />

        <label htmlFor="telephone">Teléfono:</label>
        <input
          type="number"
          name="telephone"
          id="telephone"
          required
          placeholder="Introduzca el teléfono"
        />

        <label htmlFor="duration">Duración:</label>
        <input
          type="number"
          name="duration"
          id="duration"
          required
          placeholder="Introduzca la duración (ej. 2 si la ruta dura 2 horas)"
        />

        <label htmlFor="description">Descripción:</label>
        <textarea
          name="description"
          id="description"
          placeholder="Introduzca una descripción de la ruta, sus características y demás detalles."
        ></textarea>

        <label htmlFor="level">Nivel:</label>
        <input
          type="text"
          name="level"
          id="level"
          required
          placeholder="Introduzca el nivel de dificultad de la ruta (ej. bajo, medio-alto)"
        />

        <button type="button" onClick={handlePut}>
          Enviar
        </button>
      </form>
    </div>
  );
}
