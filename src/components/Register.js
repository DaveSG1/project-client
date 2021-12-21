import React from "react";

export default function Register() {

    return (
        <div className="registerform">
            <form action="#" method="POST">

                <label htmlFor="newEmail">Email:</label>
                <input type="email" name="newEmail" id="newEmail" required />{/* al ser for palabra reservada de js, para react hemos de usar htmlFor */}

                <label htmlFor="newPassword">Contraseña:</label>
                <input type="password" name="newPassword" id="newPassword" required />


                <button type="submit">Registrar</button>
            </form>

        </div>
    )
}