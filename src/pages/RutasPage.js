import React, { useState } from "react";
import { useEffect } from "react";

import Ruta from "../components/Ruta";

export default function RutasPage() {
  //   const { rutas, setRutas } = useContext(GlobalContext);
  const [rutas, setRutas] = useState([]);

  // const { rutas, setRutas } = useContext(GlobalContext);

  let URL = "http://localhost:8000/api/rides";

  useEffect(() => {
    fetch(URL)
      .then((r) => r.json())
      .then((data) => setRutas(data));
  }, [URL]);

  return (
    <div className="gridRutas">
      {rutas.map((ruta) => {
        return <Ruta ruta={ruta} key={ruta.id} />;
      })}
    </div>
  );
}
