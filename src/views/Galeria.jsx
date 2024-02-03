import Church1 from "../public/Church1.jpg";
import Church2 from "../public/Church2.jpg";
import Church3 from "../public/Church3.jpg";
import Church4 from "../public/Church4.jpg";
import Church5 from "../public/Church5.jpg";
import Church6 from "../public/Church6.jpg";

import Galeriacomp from "../components/Galeriacomp";
import AOS from "aos";
import { useEffect } from "react";

function GaleriaChurch() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div className="container py-5">
      <h2
        data-aos="fade-up"
        className="display-5 text-body-emphasis lh-1 mb-3 border-bottom"
      >
        Galería
      </h2>
      <div data-aos="fade-right" className="row g-4 py-5">
        <div  className="container p-2 col-lg-4">
          <Galeriacomp Img={Church4} />
          <Galeriacomp Img={Church2} />
          <Galeriacomp Img={Church6} />
        </div>
        <div data-aos="fade-right" className="container p-2 col-lg-4">
          <Galeriacomp Img={Church1} />
          <Galeriacomp Img={Church3} />
          <Galeriacomp Img={Church1} />
        </div>
        <div data-aos="fade-right" className="container p-2 col-lg-4">
          <Galeriacomp Img={Church2} />
          <Galeriacomp Img={Church5} />
          <Galeriacomp Img={Church3} />
        </div>
      </div>
    </div>
  );
}

export default GaleriaChurch;
