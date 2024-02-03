import Birthday from "../assets/birthday.jpg";
import Bautizo from "../assets/bautizo.jpeg";
import Camping from "../assets/camping.jpg";
import Futbol from "../assets/futbol.jpg";
import {format} from "timeago.js";
import AOS from "aos";
import {useEffect} from 'react'

function Listgroup() {

  useEffect(()=>{
    AOS.init({duration:1000});
  })

  return (
    <div className="row">
      <div data-aos="fade-up" 
        id="list-example"
        className="list-group list-group-flush col-4"
        style={{ position: "relative" }}
      >
        <a
          className="list-group-item list-group-item-action"
          href="#list-item-1"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Donovan birthday</h5>
          </div>
          <p className="mb-1">Domingo 28 de enero 05:00 pm</p>
          <small>Lugar: DFC Salem</small>
        </a>
        <a
          className="list-group-item list-group-item-action"
          href="#list-item-2"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Bautizos</h5>
          </div>
          <p className="mb-1">Domingo 21 de enero 10:00 am</p>
          <small>Lugar: Lake Milton</small>
        </a>
        <a
          className="list-group-item list-group-item-action"
          href="#list-item-3"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Noche de campamento</h5>
          </div>
          <p className="mb-1">Viernes 19 de enero 07:00 pm</p>
          <small>Lugar: DFC Salem</small>
        </a>
        <a
          className="list-group-item list-group-item-action"
          href="#list-item-4"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Campeonato de Futbol</h5>
          </div>
          <p className="mb-1">Sabado 20 de enero 08:00 am</p>
          <small>Lugar: DFC Salem</small>
        </a>
      </div>

      <div data-aos="fade-up" 
        data-bs-spy="scroll"
        data-bs-target="#list-example"
        data-bs-offset="0"
        className="scrollspy-example col-8"
        tabIndex="0"
        style={{ overflowY: "scroll", height: 700 }}
      >
        <div id="list-item-1" className="card mb-5">
          <img src={Birthday} className="card-img-top" alt="birthday" />
          <div className="card-body">
            <h5 className="card-title">Donovan birthday</h5>
            <p className="card-text">
              Ven con nosotros a celebrar la vida de nuestro hermano Donovan,
              tendremos nuestro servicio habitual y luego conviviremos, habra
              comida y pastel. No faltes!
            </p>
            <p className="card-text">
              <small className="text-muted">{format('2024-01-29')}</small>
            </p>
          </div>
        </div>
        <div id="list-item-2" className="card mb-5">
          <img src={Bautizo} className="card-img-top" alt="birthday" />
          <div className="card-body">
            <h5 className="card-title">Bautizos</h5>
            <p className="card-text">
              Ven con nosotros a celebrar los bautizos de nuestros hermanos, te esperamos.
            </p>
            <p className="card-text">
              <small className="text-muted">{format('2024-01-22')}</small>
            </p>
          </div>
        </div>
        <div id="list-item-3" className="card mb-5">
          <img src={Camping} className="card-img-top" alt="birthday" />
          <div className="card-body">
            <h5 className="card-title">Camping Night</h5>
            <p className="card-text">
             Noche de camping, haremos una fogata, comeremos y esucharemos la palabra de Dios.
            </p>
            <p className="card-text">
              <small className="text-muted">{format('2024-02-29')}</small>
            </p>
          </div>
        </div>
        <div id="list-item-4" className="card mb-5">
          <img src={Futbol} className="card-img-top" alt="birthday" />
          <div className="card-body">
            <h5 className="card-title">Campeonato de Futbol</h5>
            <p className="card-text">
              Ven y apoyanos a nuestro campeonato anual de futbol, al final tendremos comida y predicaremos la palabra de Dios.
            </p>
            <p className="card-text">
              <small className="text-muted">{format('2024-05-29')}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listgroup;
