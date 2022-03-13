import React from "react";
import { useHistory } from "react-router";

export default function RutaCrud({ ruta }) {
  const history = useHistory();  

  function handleClickEdit(id) {    

    history.push(
      `/editRouteForm/${id}`
    ); /* para que vaya a la página del formulario para editar la ruta a la que le hemos hecho click */
  }

  function handleClickDelete(id) {    

    fetch(`http://localhost:8000/admin/rides/delete/${id}`, {
      
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
    }).then(res => res.json())
    .then(res => {
      if (res === 202){
        alert("Ruta eliminada!")
      }
    });    
  }

  return (
    <div>
      <div className="rutaCrud">
        <h2> {ruta.name} </h2>
        <img src={ruta.image} alt="imagen de ruta" />
        <h2>{ruta.ccaa}</h2>
        <p>{ruta.location}</p>
        <p>Dirección: {ruta.address}</p>
        <p>Teléfono: {ruta.telephone}</p>
        <p>Duración: {ruta.duration} horas</p>
        <p>{ruta.description}</p>
        <p>Nivel de dificultad: {ruta.level}</p>

        <div className="crudButtons">
          <button
            className="buttonBlue"
            onClick={(e) => handleClickEdit(ruta.id)}
          >
            Modificar esta ruta
          </button>
          <button
            className="buttonRed"
            onClick={(e) => handleClickDelete(ruta.id)}
          >
            Eliminar esta ruta
          </button>
        </div>
      </div>
    </div>
  );
}
