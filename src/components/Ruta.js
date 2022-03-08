import React from "react";
import { useHistory } from "react-router";

export default function Ruta({ ruta }) {
  const history = useHistory();

  // const { setIdRuta } = useContext(GlobalContext);

  function handleClick(id) {
    // setIdRuta(id);                /* para que setee el id de la ficha en la que hemos hecho click */

    history.push(
      `/ficha/${id}`
    ); /* para que vaya a la página de ficha/la ficha a la que le hemos hecho click */
  }

  return (
    <div className="BrowserCardStyle">
      <div className="ruta">
        <h2> {ruta.name} </h2>
        <img src={ruta.image} alt="" />
        <h2>{ruta.ccaa}</h2>
        <p>{ruta.location}</p>

        <button onClick={(e) => handleClick(ruta.id)}>Más información</button>
      </div>
    </div>
  );
}
