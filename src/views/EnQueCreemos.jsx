//import SirviendoCard from "../components/SirviendoCard";
import AOS from "aos";
import {useEffect} from 'react'
//Imported Images
import EspirituSanto from "../assets/espirituSanto.jpg";
//import ImgQuienesomos from "../assets/quienes somos.jpg";
import Humanidad from '../assets/Humanidad2.jpg'
import EventosFinales from '../public/salvacion.jpg'
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
              Fe
            </h1>
            <hr />
            <p data-aos="fade-up" className="lead">
            Por Fe recibimos el perdón y la salvación. Dios nos amó tanto que envió a su propio hijo, Jesús, a morir por nosotros. Al poner nuestra Fe en Jesús y creer en él, recibimos el perdón de nuestros pecados y pasamos a tener vida eterna.

            Juan 3:16
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
            Es la gracia de Dios, es la libertad de nuestros pecados que Jesús hizo posible al asumir el castigo en la cruz. La salvación nos da nueva vida y también un propósito junto a Dios: compartir las buenas noticias de la gracia de Dios y ser las manos y los pies de Cristo en este mundo, mostrando el amor de Dios a través de nuestras acciones.

            La salvación no es un acontecimiento único, es un proceso. Es el comienzo de un proceso que dura toda la vida y que nos convierte continueamente en las personas que Dios quiere que seamos. La salvación es el don gratuito que Dios nos ofrece. Nuestras vidas, vividas de manera que agraden a Dios, son nuestra ofrenda de agradecimiento a Dios.

            1 Juan 1:9
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

          <div className="col-lg-6">
            <h1 data-aos="fade-up" className="display-5  text-primary-emphasis text-opacity-75 lh-1 mb-3 fw-bold">
              Iglesia
            </h1>
            <hr />
            <p data-aos="fade-up" className="lead">
            La iglesia es el cuerpo de Cristo: todas las personas que aceptan el don de la salvación de Cristo y siguen sus enseñanzas. Ser miembro de la iglesia significa que se pertenece a Jesucristo y que se pertenece al pueblo de Dios. La presencia de Cristo es la clave de la vida de la iglesia. Es en la iglesia y a través de ella que Cristo encuentra, llama, transforma, equipa y envía a su pueblo al mundo. Dios se sirve de la iglesia para presentar la salvación a quienes no la conocen y para alimentar la fe de los creyentes. La iglesia es el instrumento de Dios para expresar su compasión y preocupación por el mundo.
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