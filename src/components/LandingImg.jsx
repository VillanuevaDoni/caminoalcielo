import "../css/components.css";
import {Link} from 'react-router-dom'
import AOS from "aos";
import {useEffect} from 'react'

function LandingImg() {

  useEffect(()=>{
    AOS.init({duration:1000});
  })

  return (
    <div>
      {/* <img src={props.origen} alt="iglesia" className="masthead" /> */}
      <header data-aos="fade-up" className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div data-aos="fade-right" className="col-12 text-center text-light">
              <h1  className="display-1 fw-bold">
                Bienvenido
              </h1>
              <p  className="lead">IGLESIA ESPERANZA DE VIDA</p>
              <hr className="my-4 text-light" />
              <p  className="text-light fs-2">
              Conocer a Dios, compartir vida, servir a otros.
              </p>
              <p className="lead">
                <Link className="btn btn-warning btn-lg" to="/quienesSomos" role="button">
                  Empezar
                </Link>
              </p>
            </div>            
          </div>
        </div>
      </header>{" "}
    </div>
  );
}

export default LandingImg;
