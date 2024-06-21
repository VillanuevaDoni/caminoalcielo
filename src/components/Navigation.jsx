import { NavLink } from "react-router-dom";
import logoIglesia from "../assets/IglesiaLA.png";

export default function Navigation() {
  return (
    <nav className=" navbar sticky-top navbar-expand-lg navbar-light bg-light py-3 border-bottom border-secondary border-2" >
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          {/* <a className="navbar-brand"> */}
            <img
              src={logoIglesia}
              alt="logo iglesia"
              width="60"
              height="55"
              className="d-inline-block align-text-middle p-1 "
            />Ministerios de Jesucristo Camino al Cielo
          {/* </a> */}
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
              <NavLink className="nav-link active" to="/quienesSomos">
                Quiénes somos
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link active" to="/queCreemos">
                En qué creemos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/contacto">
                Servicios
              </NavLink>
            </li>
           {/* <li className="nav-item"> 
             <NavLink className="nav-link" to="/noticias">
                Noticias
              </NavLink>
            </li>*/}
            <li className="nav-item">
              <NavLink className="nav-link active" to="/ministerios">
                Enseñanzas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/sirviendo">
                Contacto
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/galeria">
                Galeria
              </NavLink>
            </li>
        
          </ul>
        </div>
      </div>
    </nav>
  );
}
