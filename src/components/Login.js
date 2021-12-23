import React from "react"
import { useHistory } from "react-router-dom";

export default function Login() {

    const history = useHistory();

    function handleRegister() {
        history.push("/register")
    }

    return (
        <>
            <div className="logincomponent">
                <div className="loginform">
                    <h3>Acceso usuarios </h3>
                    <form action="#" method="GET">

                        <div>
                            <label htmlFor="userEmail">Email:</label>
                            <input type="email" name="userEmail" id="userEmail" required />
                        </div>
                        <div>
                            <label htmlFor="userPassword">Password:</label>
                            <input type="password" name="userPassword" id="userPassword" required />
                        </div>
                        <div>
                            <button type="submit">Iniciar sesión</button>
                        </div>

                    </form>
                </div>

                <div className="newaccount">
                    <h4>Nuevo usuario</h4>
                    <button onClick={handleRegister}>Crear una cuenta</button>
                </div>
            </div>
        </>
    )
}