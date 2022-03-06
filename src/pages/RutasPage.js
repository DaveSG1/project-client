import React, { useState } from "react";
import { useEffect } from "react";

import Ruta from "../components/Ruta";

export default function RutasPage() {
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
      <h1 className="rutastitle">TODAS NUESTRAS RUTAS</h1>
      <div className="gridRutas">
        {rutas?.map((ruta) => {
          return <Ruta ruta={ruta} key={ruta.id} />;
        })}
      </div>
    </div>
  );
}
