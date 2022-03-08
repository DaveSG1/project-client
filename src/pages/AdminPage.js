import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import RutaCrud from "../components/RutaCrud";

export default function AdminPage() {
  const history = useHistory();
  function handleClick() {
    history.push("/newRouteForm/");
  }

  //   const { rutas, setRutas } = useContext(GlobalContext);
  const [rutas, setRutas] = useState([]);

  // const { rutas, setRutas } = useContext(GlobalContext);

  let URL = "http://localhost:8000/api/rides/read";

  useEffect(() => {
    fetch(URL)
      .then((r) => r.json())
      .then((data) => {
        setRutas(
          data["data"]
        ); /* porque tengo que acceder, de dentro del objeto json (data), al elemento que tiene la key 'data' ["data"] (puedo ver la estructura de lo que contiene data haciendo aqui un console log) (la key "data" la definí en el back en el api controller para cada endpoint) */
      });
  }, [URL]);

  return (
    <div>
      <br />
      <button className="buttonGreen" onClick={(e) => handleClick()}>
        Añadir nueva ruta
      </button>
      <br />
      <br />
      <div className="gridRutas">
        {rutas?.map((ruta) => {
          return <RutaCrud ruta={ruta} key={ruta.id} />;
        })}
      </div>
    </div>
  );
}
