import "../css/components.css";

function LandingImg(props) {
    
  return (
    <div>
      {/* <img src={props.origen} alt="iglesia" className="masthead" /> */}
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center text-light">
              <h1 className="display-5 fw-bold">
                Bienvenido a Iglesia Esperanza de Vida
              </h1>
              <p className="lead">A great starter layout for a landing page</p>
              <hr className="my-4 text-light" />
              <p className="text-light">
                It uses utility classes for typography and spacing to space
                content out within the larger container.
              </p>
              <p className="lead">
                <a className="btn btn-warning btn-lg" href="#" role="button">
                  Empezar
                </a>
              </p>
            </div>            
          </div>
        </div>
      </header>{" "}
    </div>
  );
}

export default LandingImg;
