import React from "react";
import { useHistory } from "react-router";

export default function Ficha({ ficha }) {
  const history = useHistory();

  /* console.log(ficha.user); */
  function handleClick(e) {
    history.push(`/reservas/${ficha.id}`);
  }

  return (
    <div className="ficha">
      <h2> {ficha.name} </h2>
      <img src={ficha.image} alt="imagen de ruta" />
      <h2>{ficha.ccaa}</h2>
      <p>{ficha.address}</p>
      <p>{ficha.user?.email}</p>
      <p>{ficha.duration} horas</p>
      <p>{ficha.description}</p>
      <p>{ficha.level}</p>
      <button onClick={(e) => handleClick(e)}>Reservar</button>
    </div>
  );
}
