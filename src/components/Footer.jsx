import logoIglesia from "../assets/Logo Color Transpar BG.png";
import FacebookLogo from "../components/FacebookLogo";
import InstagramLogo from "../components/InstagramLogo";
import TwitterLogo from "../components/TwitterLogo";

function Footer() {
  return (
    <div className="container">
      <footer className="border-top d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            {/* <svg className="bi" width="30" height="24">
              <use xlink:href="#bootstrap"></use>
            </svg> */}
          </a>
          <span className="mb-3 mb-md-0 text-muted">
            <p>
              <img
                src={logoIglesia}
                height={44}
                width={44}
                alt="logo iglesia"
              />{" "}
              © 2024 Copyright
            </p>
          </span>
        </div>

        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-3 mb-md-0 text-muted">
            <p className="fw-bold">Contactanos:</p>
            <p>Correo electrónico: correo@ejemplo.com</p>
            <p>Teléfono: 234 567-5790</p>
            <p>Dirección: 1300 Franklin Ave, Salem, OH 44460</p>
          </span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-muted" href="https://www.facebook.com/manuel.pastoresperanzadevida" target="_blank" rel="noopener noreferrer">
              <svg className="bi" width="44" height="44">
                <FacebookLogo />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#">
              <svg className="bi" width="44" height="44">
                <InstagramLogo />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#">
              <svg className="bi" width="44" height="44">
                <TwitterLogo />
              </svg>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
