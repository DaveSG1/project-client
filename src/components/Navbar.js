import { NavLink } from "react-router-dom";
import React from "react";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className="burger">
                    <i class="fas fa-bars fa-lg"></i>
                </div>

                <div className="navlinks">
                    <NavLink to="/" activeClassName="active" exact={true}>Inicio</NavLink>
                    <NavLink to="/Quienes somos" activeClassName="active">Quienes somos</NavLink>
                    <NavLink to="/rutas" activeClassName="active">Rutas</NavLink>
                    <NavLink to="/reserva" activeClassName="active">Reserva</NavLink>
                </div>

                <div className="navlogin">
                    <NavLink to="/login">
                        <i class="fas fa-user fa-lg"></i>
                        <span>Acceso usuarios</span>
                    </NavLink>
                </div>

            </nav>

        </div>
    )
}