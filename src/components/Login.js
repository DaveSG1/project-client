import React from "react";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();

  function handleAuth() {
    const user = window.document.getElementById("user").value;
    const password = window.document.getElementById("password").value;

    fetch("http://localhost:8000/api/login_check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ username: user, password: password }),
    }).then((data) =>
      data.json().then((data) => {
        localStorage.setItem("token", data["token"]);
        /* ésta función de aquí es la que guarda el token en mi localstorage, sólo hace falta aquí, en el login */

        /* localStorage.clear 
        ésta función sería para borrar el token para el logout*/

        history.push("/admin");
        /* con ésto, cuando reconoce al usuario como registrado, y ha guardado su token, redirige a la página de admin, sólo hace falta aquí en el login */
      })
    );
  }

  function handleRegister() {
    history.push("/register");
  }

  return (
    <>
      <div className="logincomponent">
        <div className="loginform">
          <h3>Acceso usuarios </h3>
          <form action="#" method="GET">
            <div>
              <label htmlFor="userEmail">Email:</label>
              <input type="email" name="userEmail" id="user" required />
            </div>
            <div>
              <label htmlFor="userPassword">Password:</label>
              <input
                type="password"
                name="userPassword"
                id="password"
                required
              />
            </div>

            <div>
              <button type="button" onClick={handleAuth}>
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>

        <div className="newaccount">
          <h4>Nuevo usuario</h4>
          <button onClick={handleRegister}>Crear una cuenta</button>
        </div>
      </div>
    </>
  );
}
