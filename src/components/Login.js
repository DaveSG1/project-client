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
      },
      body: JSON.stringify({ username: user, password: password }),
    }).then((data) =>
      data.json().then((data) => {
        localStorage.setItem("token", data["token"]);
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
