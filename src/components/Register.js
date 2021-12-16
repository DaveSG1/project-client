import React from "react";

export default function Register() {

    return (
        <div className="registerform">
            <form action="#" method="POST">
                <label htmlFor="newFirstName">Nombre:</label> {/* al ser for palabra reservada de js, para react hemos de usar htmlFor */}
                <input type="text" name="newFirstName" id="newFirstName" required />
                <label htmlFor="newLastName">Apellido(s):</label>
                <input type="text" name="newLastName" id="newLastName" required />
                <label htmlFor="newEmail">Email:</label>
                <input type="email" name="newEmail" id="newEmail" required />
                <label htmlFor="newPassword">Contraseña:</label>
                <input type="password" name="newPassword" id="newPassword" required />


                <button type="submit">Guardar</button>
            </form>

        </div>
    )
}