import React from "react";
import { useHistory } from "react-router";

export default function Ficha({ ficha }) {
  
  const history = useHistory();  
  function handleClick(e) {
    history.push(`/reservas/${ficha.id}`);
  }

  return (
    <div className="ficha">
      <h2> {ficha.name} </h2>
      <img src={ficha.image} alt="imagen de ruta" />
      <h2>{ficha.ccaa}</h2>
      <p>Dirección: {ficha.address}</p>
      <p>Email: {ficha.user?.email}</p>
      <p>Duración: {ficha.duration} horas</p>
      <p>{ficha.description}</p>
      <p>Nivel de dificultad: {ficha.level}</p>
      <button onClick={(e) => handleClick(e)}>Reservar</button>
    </div>
  );
}
