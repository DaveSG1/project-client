import React from "react";

export default function NewRouteForm() {
  /* ¿como recibo el id de usuario aqui? */
  function handlePost() {
    const ccaa = window.document.getElementById("ccaa").value;
    const name = window.document.getElementById("name").value;
    const location = window.document.getElementById("location").value;
    const address = window.document.getElementById("address").value;
    const telephone = window.document.getElementById("telephone").value;
    const duration = window.document.getElementById("duration").value;
    const description = window.document.getElementById("description").value;
    const level = window.document.getElementById("level").value;

    fetch("http://localhost:8000/admin/rides/create", {
      /* ...para que lo coja aquí y asigne la ruta a dicho id de usuario? */
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer" + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        ccaa: ccaa,
        name: name,
        location: location,
        address: address,
        telephone: telephone,
        duration: duration,
        description: description,
        level: level,
      }),
    }).then((data) =>
      data.json().then((data) => {
        localStorage.setItem("token", data["token"]);
      })
    );
  }

  return (
    <div className="post">
      <h3>Publicar una nueva ruta</h3>

      {/*    $ride->setActive($data['active']);  PREGUNTAR MIGUEL: El "active" lo Elimino de la bbdd o pongo algo para que por defecto sea 1?
            $ride->setCcaa($data['ccaa']);
            $ride->setName($data['name']);
            $ride->setLocation($data['location']);
            $ride->setAddress($data['address']);
            $ride->setTelephone($data['telephone']);
            $ride->setDuration($data['duration']);
            $ride->setDescription($data['description']);
            $ride->setLevel($data['level']);
            $ride->setUser($user); */}

      <form action="#" method="POST">
        <label htmlFor="ccaa">Comunidad autónoma:</label>
        <input
          type="text"
          name="ccaa"
          id="ccaa"
          required
          placeholder="Introduzca la comunidad autónoma"
        />

        <label htmlFor="name">Nombre ruta:</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="Introduzca el nombre de la ruta"
        />

        <label htmlFor="location">Localidad:</label>
        <input
          type="text"
          name="location"
          id="location"
          required
          placeholder="Introduzca la localidad"
        />

        <label htmlFor="address">Dirección:</label>
        <input
          type="text"
          name="address"
          id="address"
          required
          placeholder="Introduzca la dirección"
        />

        <label htmlFor="telephone">Teléfono:</label>
        <input
          type="number"
          name="telephone"
          id="telephone"
          required
          placeholder="Introduzca el teléfono"
        />

        <label htmlFor="duration">Duración:</label>
        <input
          type="text"
          name="address"
          id="address"
          required
          placeholder="Introduzca la duración (ej. 2 si la ruta dura 2 horas)"
        />

        <label htmlFor="description">Descripción:</label>
        <textarea
          name="description"
          id="description"
          placeholder="Introduzca una descripción de la ruta, sus características y demás detalles."
        ></textarea>

        <label htmlFor="level">Nivel:</label>
        <input
          type="text"
          name="level"
          id="level"
          required
          placeholder="Introduzca el nivel de dificultad de la ruta (ej. bajo, medio-alto)"
        />

        <button type="button" onClick={handlePost}>
          Enviar
        </button>
      </form>
    </div>
  );
}
