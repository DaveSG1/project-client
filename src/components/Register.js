import React from "react";

export default function Register() {

  function handleRegister() {
    const email = document.getElementById("newEmail").value;
    const password = document.getElementById("newPassword").value;

    fetch("http://localhost:8000/api/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password,
        roles: ["ROLE_USER"],
        active: 1,
      }),
    }).then().then();  
  }

  return (
    <div className="registercomponent">
      <h3>Nuevo usuario</h3>
      <form action="#" className="registerform" method="POST">
        <label htmlFor="newEmail">Email:</label>{" "}        
        <input type="email" name="newEmail" id="newEmail" required />
        <label htmlFor="newPassword">Contraseña:</label>
        <input type="password" name="newPassword" id="newPassword" required />
        <button type="button" onClick={handleRegister}>Registrar</button>
      </form>
    </div>
  );
}
