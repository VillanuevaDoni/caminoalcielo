import { NavLink } from "react-router-dom";
import logoIglesia from "../assets/Logo Color Transpar BG.png";

export default function Navigation() {
  return (
    <nav className=" navbar fixed-top navbar-expand-lg navbar-dark bg-dark  py-3 border-bottom" >
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <a className="navbar-brand">
            <img
              src={logoIglesia}
              alt="logo iglesia"
              width="60"
              height="54"
              className="d-inline-block align-text-middle"
            />Iglesia Esperanza de Vida
          </a>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/quienesSomos">
                Quienes somos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contacto">
                Contacto
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/noticias">
                Noticias
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sirviendo">
                Sirviendo a otros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ministerios">
                Ministerios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/galeria">
                Galeria
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
