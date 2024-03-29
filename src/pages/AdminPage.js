import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import RutaCrud from "../components/RutaCrud";

export default function AdminPage() {
  const history = useHistory();
  function handleClick() {
    history.push("/newRouteForm/");
  }

  const [rutas, setRutas] = useState([]);  

  const URL = "http://localhost:8000/admin/rides/read/user";

  useEffect(() => {
    fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((request) =>
      request.json().then((data) => {
        setRutas(data["data"]);
      })
    );
  }, [URL]);

  return (
    <div>
      <br />
      <button className="buttonGreen" onClick={(e) => handleClick()}>
        Añadir nueva ruta
      </button>
      <br />
      <br />
      <div className="gridRutasAdmin">
        {rutas?.map((ruta) => {
          return <RutaCrud ruta={ruta} key={ruta.id} />;
        })}
      </div>
    </div>
  );
}
