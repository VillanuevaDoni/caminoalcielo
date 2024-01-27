import ImgMapsIglesia from '../assets/maps iglesia.png'
import Contact from '../components/ContactCmp'
import AOS from "aos";
import {useEffect} from 'react'

function Contacto() {

  useEffect(()=>{
    AOS.init({duration:2000});
  })

  return (
    <div className="container p-4 py-5">
      <div data-aos="fade-up" className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5 rounded-3 ">
          <div className="col-10 col-sm-8 col-lg-6">
          <a href="https://www.google.com/maps/place/Damascus+Friends+Church+Salem+Campus/@40.8899317,-80.8389469,17z/data=!3m1!4b1!4m6!3m5!1s0x8836aaeee8f0f6fb:0x5a4e47fff260f40c!8m2!3d40.8899317!4d-80.8389469!16s%2Fg%2F1tw_nxvd?entry=ttu" target="_blank" rel="noopener noreferrer">
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
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Hora de servicio
            </h1>
            <hr />
            <p className="lead fs-3">
            DOMINGOS | 05:00 PM
            </p>
            <p className='lead fs-3'>
            1300 FRANKLIN AVE. SALEM, OH 44460
            </p>
            <a href="https://www.google.com/maps/place/Damascus+Friends+Church+Salem+Campus/@40.8899317,-80.8389469,17z/data=!3m1!4b1!4m6!3m5!1s0x8836aaeee8f0f6fb:0x5a4e47fff260f40c!8m2!3d40.8899317!4d-80.8389469!16s%2Fg%2F1tw_nxvd?entry=ttu" target="_blank" rel="noopener noreferrer" className="icon-link">
            Obtener Direccion:
          </a>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            </div>
          </div>
        </div>
      </div>


<Contact/>

    </div>
  );
}

export default Contacto;
