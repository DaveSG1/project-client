import React from "react";
import { useHistory } from "react-router";

export default function RutaCrud({ ruta }) {
  const history = useHistory();

  // const { setIdRuta } = useContext(GlobalContext);

  function handleClickEdit(id) {
    // setIdRuta(id);                /* para que setee el id de la ficha en la que hemos hecho click */

    history.push(
      `/editRouteForm/${id}`
    ); /* para que vaya a la página de ficha/la ficha a la que le hemos hecho click */
  }

  function handleClickDelete(id) {
    /* EN ÉSTA ENTIENDO QUE DEBERÉ LINKAR DIRECTAMENTE EL ENLACE DEL ENDPOINT CREADO PARA ELIMINAR LA RUTA */

    // setIdRuta(id);                /* para que setee el id de la ficha en la que hemos hecho click */

    fetch(`http://localhost:8000/admin/rides/delete/${id}`, {
      /* ...para que lo coja aquí y asigne la ruta a dicho id de usuario? */
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

    // history.push('/rutas');
    // history.push('/admin');
  }

  return (
    <div>
      <div className="rutaCrud">
        <h2> {ruta.name} </h2>
        <img src={ruta.image} alt="imagen de ruta" />
        <h2>{ruta.ccaa}</h2>
        <p>{ruta.location}</p>

        <div className="crudButtons">
          <button
            className="buttonBlue"
            onClick={(e) => handleClickEdit(ruta.id)}
          >
            Modificar ésta ruta
          </button>
          <button
            className="buttonRed"
            onClick={(e) => handleClickDelete(ruta.id)}
          >
            Eliminar ésta ruta
          </button>
        </div>
      </div>
    </div>
  );
}
