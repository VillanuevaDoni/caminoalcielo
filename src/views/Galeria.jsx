import Church1 from "../public/Church1.jpg";
import Church2 from "../public/Church2.jpg";
import Church3 from "../public/Church3.jpg";
import Church4 from "../public/Church4.jpg";
import Church5 from "../public/Church5.jpg";
import Church6 from "../public/Church6.jpg";
import Church7 from "../public/Church7.jpg";
import Church8 from "../public/Church8.jpg";
import Church9 from "../public/Church9.jpg";

import Galeriacomp from "../components/Galeriacomp";
import AOS from "aos";
import { useEffect } from "react";

function GaleriaChurch() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scroll(0,0)
  });

  return (
    <div className="container py-5">
      <h2
        data-aos="fade-up"
        className="fw-bold display-5 text-primary-emphasis text-opacity-75 lh-1 mb-3 border-bottom"
      > Galería
      </h2>
      <div data-aos="fade-right" className="row g-4 py-5">
        <div  className="container p-2 col-lg-4">
          <Galeriacomp Img={Church1} />
          <Galeriacomp Img={Church2} />
          <Galeriacomp Img={Church3} />
        </div>
        <div data-aos="fade-right" className="container p-2 col-lg-4">
          <Galeriacomp Img={Church7} />
          <Galeriacomp Img={Church5} />
          <Galeriacomp Img={Church6} />
        </div>
        <div data-aos="fade-right" className="container p-2 col-lg-4">
          <Galeriacomp Img={Church4} />
          <Galeriacomp Img={Church8} />
          <Galeriacomp Img={Church9} />
        </div>
      </div>
    </div>
  );
}

export default GaleriaChurch;
