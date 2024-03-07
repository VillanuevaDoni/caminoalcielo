import ImgQuienesomos from "../assets/quienes somos.jpg";
import AOS from "aos";
import {useEffect} from 'react'

function QuienesSomos() {

useEffect(()=>{
  AOS.init({duration:1000});
})

  return (
    <div className="container-fluid p-4">
      <div data-aos="fade-up" className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5 rounded-3 ">
          <div data-aos="fade-up" className="col-10 col-sm-8 col-lg-6">
            <img 
              src={ImgQuienesomos}
              className="d-block mx-lg-auto img-fluid rounded-3 shadow-lg"
              alt="quienes somos"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 data-aos="fade-up" className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Quiénes somos
            </h1>
            <hr />
            <p data-aos="fade-up" className="lead">
            Somos un grupo de personas que seguimos a Jesús. Tenemos  el deseo profundo de ver  personas individuales como  a nuestra comunidad transformada por el poder de Cristo.  Sin importar tu trasfondo, eres mas que bienvenido a nuestra iglesia. Nuestro deseo es ofrecerte un lugar donde puedes experimentar una comunión genuina con Dios y con personas como tú. 
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              {/* <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button> */}
              {/* <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button> */}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default QuienesSomos;
