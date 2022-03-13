import React, { useState } from "react";
import { useEffect } from "react";

import Ruta from "../components/Ruta";

export default function RutasPage() {
  
  const [rutas, setRutas] = useState([]); 
  const [rutaFiltrada, setRutaFiltrada] = useState('');

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
      <div>
      <h1 className="rutasTitle">TODAS NUESTRAS RUTAS</h1>
      </div>
      <div>
        <form className="formFinder">
          <p className="textFinder">Buscador de rutas:</p>
          <input 
          type="text"
          placeholder="Introduce el lugar donde te gustaría ir"
          className="inputFinder"
          name="inputFinder"
          autoComplete="off"
          onChange={event => {setRutaFiltrada(event.target.value)}}/>
        </form>
      </div>

      <div className="gridRutas">

        {rutas.filter((ruta) => {
          if (rutaFiltrada === "") {
            return ruta

          } else if (ruta.ccaa.toLowerCase().includes(rutaFiltrada.toLowerCase().trim())) {
            return ruta
            
          } else if (ruta.location.toLowerCase().includes(rutaFiltrada.toLowerCase().trim())) {
            return ruta
          
          } else {
            return false
          }

        }).map((ruta) => {
          return <Ruta ruta={ruta} key={ruta.id} />       
        
        })}
                
      </div>

    </div>
  )
}
