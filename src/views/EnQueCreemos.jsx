//import SirviendoCard from "../components/SirviendoCard";
import AOS from "aos";
import {useEffect} from 'react'
//Imported Images
import EspirituSanto from "../assets/espirituSanto.jpg";
//import ImgQuienesomos from "../assets/quienes somos.jpg";
import Humanidad from '../assets/Humanidad2.jpg'
import EventosFinales from '../assets/salvacion.jpg'
import Biblia from '../assets/Biblia.jpg'
import Salvacion from '../assets/bautizo.jpeg'
import IglesiaReunion from '../assets/IglesiaReunion.jpg'

function Sirviendo() {

  useEffect(()=>{
    AOS.init({duration:1000});
    window.scroll(0,0)
  })
  
  return (
    <div>
    <div data-aos="fade-up"  className="container px-4 py-5" id="featured-3">
      {/*<h2 className="fw-bold display-5 text-body-emphasis lh-1 mb-3 border-bottom">
        En qué creemos
      </h2>*/}
</div>
      <div className="container-fluid p-4">
      
      <div data-aos="fade-up" className="container col-xxl-10 px-4 ">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5 rounded-3 ">
          <div data-aos="fade-up" className="col-10 col-sm-8 col-lg-6">
            <img 
              src={EspirituSanto}
              className="d-block mx-lg-auto img-fluid rounded-3 shadow-lg"
              alt="quienes somos"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 data-aos="fade-up" className="display-5  text-primary-emphasis text-opacity-75 lh-1 mb-3 fw-bold">
              Espíritu Santo
            </h1>
            <hr />
            <p data-aos="fade-up" className="lead">
            El Espíritu Santo es Dios, al igual que el Padre y el Hijo. El Espíritu Santo convence al mundo de pecado, de justicia y de juicio. Él regenera, sella y separa al creyente a una vida santa. En la regeneración, bautiza al creyente en el cuerpo de Cristo y viene para habitarle permanentemente. Provee dones espirituales para la edificación del cuerpo de Cristo.

            Salmo 139: 7-8; Hechos 1: 8; 5: 3-4; Juan 16: 8; Tito 3: 5; Efesios 4: 11-13; I Corintios 2: 12 
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              {/* <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button> */}
              {/* <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button> */}
            </div>
          </div>
        </div>
      </div>


          <div data-aos="fade-up" className="container col-xxl-10 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5 rounded-3 ">
        <div  data-aos="fade-up" className="col-10 col-sm-8 col-lg-6">
            <img 
              src={Humanidad}
              className="d-block mx-lg-auto img-fluid rounded-3 shadow-lg"
              alt="en que creemos"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div  className="col-lg-6">
            <h1 data-aos="fade-up" className="display-5  text-primary-emphasis text-opacity-75 lh-1 mb-3 fw-bold">
              Humanidad
            </h1>
            <hr />
            <p data-aos="fade-up" className="lead">
            La humanidad ha sido hecha a la imagen y semejanza de Dios. Es la creación suprema de Dios. Ha sido creada para vivir eternamente y disfrutar del resto de la creación. Fue diseñada para la alabanza del nombre de Dios, pero por su desobediencia y pecado fue separado de Dios. La reconciliación con Dios ha sido posible por Su gracia y no por méritos propios.

            Génesis 1: 26-27, 31; Efesios 1: 6,12, 14; 2: 8-9; Romanos 3: 23
            </p>
            
          </div>
         
        </div>
      </div> 


      <div data-aos="fade-up" className="container col-xxl-10 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5 rounded-3 ">
          <div data-aos="fade-up" className="col-10 col-sm-8 col-lg-6">
            <img 
              src={Salvacion}
              className="d-block mx-lg-auto img-fluid rounded-3 shadow-lg"
              alt="quienes somos"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 data-aos="fade-up" className="display-5  text-primary-emphasis text-opacity-75 lh-1 mb-3 fw-bold">
              Salvación
            </h1>
            <hr />
            <p data-aos="fade-up" className="lead">
            La salvación es un regalo de Dios para la humanidad. Cuando el hombre cree en Jesús como su Señor y Salvador, Dios ofrece el perdón del pecado, sin la intervención de obras humanas. Ofrece vida eterna con Dios desde el momento de la confesión de pecado.
            
            Juan 14: 6; Romanos 5: 1, 8; Gálatas 3: 26; 
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              {/* <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button> */}
              {/* <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button> */}
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className="container col-xxl-10 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5 rounded-3 ">
          <div  className="col-lg-6">
            <h1 data-aos="fade-up" className="display-5  text-primary-emphasis text-opacity-75 lh-1 mb-3 fw-bold">
              La Biblia
            </h1>
            <hr />
            <p data-aos="fade-up" className="lead">
            La Biblia es la Palabra de Dios para la humanidad. Fue escrita por autores humanos bajo la guía del Espíritu Santo. Es la autoridad suprema y final para doctrina y vida cristiana. Tanto el Antiguo, como el Nuevo Testamento, fueron inspirados por Dios y revelan la persona de Dios, su amor y redención.

            Salmo 119:105; Proverbios 30:5;  2 Timoteo 3:16
            </p>
            
          </div>
          <div  data-aos="fade-up" className="col-10 col-sm-8 col-lg-6">
            <img 
              src={Biblia}
              className="d-block mx-lg-auto img-fluid rounded-3 shadow-lg"
              alt="en que creemos"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </div> 

      <div data-aos="fade-up" className="container col-xxl-10 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5 rounded-3 ">

          <div className="col-lg-6">
            <h1 data-aos="fade-up" className="display-5  text-primary-emphasis text-opacity-75 lh-1 mb-3 fw-bold">
              Iglesia
            </h1>
            <hr />
            <p data-aos="fade-up" className="lead">
            La Iglesia es el cuerpo de Jesucristo, del cual él es la cabeza. Todo el que ha puesto su fe en Jesús es parte de la Iglesia universal. Las Iglesias locales son expresiones de la Iglesia universal. El bautismo en agua y la Cena del Señor son ordenanzas que la Iglesia practica.

            Filipenses 1:1; Col0senses 1: 18; Hebreos 11: 39 – 40 
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              {/* <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button> */}
              {/* <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button> */}
            </div>
          </div>
          <div data-aos="fade-up" className="col-10 col-sm-8 col-lg-6">
            <img 
              src={IglesiaReunion}
              className="d-block mx-lg-auto img-fluid rounded-3 shadow-lg"
              alt="quienes somos"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className="container col-xxl-10 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5 rounded-3 ">
          <div  className="col-lg-6">
            <h1 data-aos="fade-up" className="display-5  text-primary-emphasis text-opacity-75 lh-1 mb-3 fw-bold">
              Eventos Finales
            </h1>
            <hr />
            <p data-aos="fade-up" className="lead">
            Al final, Jesús regresará a la tierra para establecer su reino en el cuál él reinará con justicia y paz. Los muertos en Cristo resucitarán con cuerpos inmortales y los que aún vivan serán transformados. La humanidad existe eternamente, separada de Dios por el pecado o en unión con Dios por medio del perdón y salvación. El cielo es el lugar donde los creyentes pasaran la eternidad con Dios. El infierno es la separación eterna de Dios.
            
            Romanos 6:23, Apocalipsis 20:15, Mateo 1:8, 24:30; Apocalipsis 1: 7; Hechos 1: 9 – 11; Filipenses 3:21, Hebreos 9: 27.
            </p>
            
          </div>
          <div  data-aos="fade-up" className="col-10 col-sm-8 col-lg-6">
            <img 
              src={EventosFinales}
              className="d-block mx-lg-auto img-fluid rounded-3 shadow-lg"
              alt="en que creemos"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </div> 

      </div>        
    </div>

  );
}

export default Sirviendo;