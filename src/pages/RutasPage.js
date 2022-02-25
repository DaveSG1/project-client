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
        ); /* porque tengo que acceder a la key 'data' dentro del objeto json el array de las varias que podría haber (definida en el back en el api controller para cada endpoint) */
      });
  }, [URL]);

  return (
    <div className="gridRutas">
      {rutas?.map((ruta) => {
        return <Ruta ruta={ruta} key={ruta.id} />;
      })}
    </div>
  );
}
