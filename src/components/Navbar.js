import { NavLink } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="burger">
          <i className="fas fa-bars fa-lg"></i>
        </div>

        <div className="navlinks">
          <NavLink to="/" activeClassName="active" exact={true}>
            Inicio
          </NavLink>
          <NavLink to="/empresa" activeClassName="active">
            Empresa
          </NavLink>
          <NavLink to="/rutas" activeClassName="active">
            Rutas
          </NavLink>
          <NavLink to="/admin" activeClassName="active">
            Admin
          </NavLink>
        </div>

        <div className="navlogin">
          <NavLink to="/login">
            <i className="fas fa-user fa-lg"></i>
            <span>Entrar</span>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
