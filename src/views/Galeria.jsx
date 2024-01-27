import ImageGallery from "../components/Galeriacomp";
import AOS from "aos";
import {useEffect} from 'react' 

function Galeria() {
  
  useEffect(()=>{
    AOS.init({duration:2000});
  })

  return (
    <div data-aos="fade-up" className="container py-5">
      <h1
        className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
      Galería
      </h1>
      <hr />
      <ImageGallery/>
    </div>
  );
}

export default Galeria;
