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
            <div data-aos="fade-right" className="col-12 text-left text-dark">
              <h1  className="display-1 fw-bold" >
                Bienvenido
              </h1>
              <p  className="lead">IGLESIA MINISTERIOS DE JESUCRISTO CAMINO AL CIELO</p>
              <hr className="my-4 text-dark" />
              <p  className="text-dark fs-2">
              Vivir para Dios, predicar su palabra, servir a otros.
              </p>
              <p className="lead">
                <Link className="btn btn-primary btn-lg" to="/quienesSomos" role="button">
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
