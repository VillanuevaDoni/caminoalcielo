import "../css/components.css";
import {Link} from 'react-router-dom'

function LandingImg(props) {
    
  return (
    <div>
      {/* <img src={props.origen} alt="iglesia" className="masthead" /> */}
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center text-light">
              <h1 className="display-1 fw-bold">
                Bienvenido
              </h1>
              <p className="lead">IGLESIA ESPERANZA DE VIDA</p>
              <hr className="my-4 text-light" />
              <p className="text-light fs-2">
              Porque para Dios no hay nada imposible.<p>Lucas 1:37</p>
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
