//import Contact from '../components/ContactCmp'
import ImgMapsIglesia from '../assets/mapIglesiaLA.png'
import AOS from "aos";
import {useEffect} from 'react'

function Contacto() {

  useEffect(()=>{
    AOS.init({duration:1000});
    window.scroll(0,0)
  })

  return (
    <div className="container p-4 py-5">
      <div data-aos="fade-up" className="container col-xxl-8 px-4 ">
        <div className="row flex-lg-row-reverse align-items-center g-3 rounded-3 ">
     
          <div className="col-lg-12">
            <h1 className="display-5 fw-bold text-primary-emphasis text-opacity-75 lh-1 mb-3">
              Horario de servicios
            </h1>
          <hr />
            <p className="lead fs-3 fw-bold">ORACIÓN</p>
            <p className="lead fs-3">MARTES | 07:30 PM-09:00 PM</p>
            <hr />
            <p className="lead fs-3 fw-bold">SERVICIO GENERAL</p>
            <p className="lead fs-3">MIERCOLES | 07:30-09:30 PM</p>
            <hr />
            {/* <p className="lead fs-3 fw-bold">SERVICIO GENERAL</p> */}
            <p className="lead fs-3">DOMINGO | 05:00-07:00 PM</p>
            <hr />
            <br />
            <br />
            <p className="lead fs-3 fw-bold">DIRECCIÓN</p>
            <p className='lead fs-3'>
            14042 Vanowen St. Van Nuys, CA 91405
            </p>
            <a href="https://maps.app.goo.gl/Jr8X1nqfj8NKTtfH8" target="_blank" rel="noopener noreferrer" className="icon-link">
            Obtener Direccion:
          </a>
           {/*  <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            </div> */}
          </div>
          <div className="col-10 col-sm-8 col-lg-8">
          <a href="https://maps.app.goo.gl/Jr8X1nqfj8NKTtfH8" target="_blank" rel="noopener noreferrer">
            <img
              src={ImgMapsIglesia}
              className="d-block mx-lg-auto img-fluid rounded-3 shadow-lg"
              alt="quienes somos"
              width="700"
              height="500"
              loading="lazy"
            />
            </a>
          </div>
        </div>
      </div>


{/*<Contact/>*/}

    </div>
  );
}

export default Contacto;
