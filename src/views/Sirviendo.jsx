import SirviendoCard from "../components/SirviendoCard";
import AOS from "aos";
import {useEffect} from 'react'

function Sirviendo() {

  useEffect(()=>{
    AOS.init({duration:1000});
  })
  
  return (
    <div data-aos="fade-up"  className="container px-4 py-5" id="featured-3">
      <h2 className="fw-bold display-5 text-body-emphasis lh-1 mb-3 border-bottom">
        Sirviendo a otros
      </h2>
      <div data-aos="fade-up"  className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <SirviendoCard
          Title="Titulo-1"
          Text="1-Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis cumque incidunt provident modi esse pariatur unde nihil
            voluptate! Facere architecto quisquam rem pariatur voluptas facilis
            asperiores corporis, magni tempore nam?"
          Reference="https://www.youtube.com"Í
        />
        <SirviendoCard
          Title="Titulo-2"
          Text="2-Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis cumque incidunt provident modi esse pariatur unde nihil
            voluptate! Facere architecto quisquam rem pariatur voluptas facilis
            asperiores corporis, magni tempore nam?"
          Reference="https://www.youtube.com"
        />
        <SirviendoCard
          Title="Titulo-3"
          Text="3-Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis cumque incidunt provident modi esse pariatur unde nihil
            voluptate! Facere architecto quisquam rem pariatur voluptas facilis
            asperiores corporis, magni tempore nam?"
          Reference="https://www.youtube.com"
        />
      </div>
    </div>
  );
}

export default Sirviendo;
