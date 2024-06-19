import MinisteriosCard from "../components/MinisteriosCard";
import AOS from "aos";
import {useEffect} from 'react'

function Ministerios() {

  useEffect(()=>{
    AOS.init({duration:1000});
    window.scroll(0,0)
  })

  return (
    <div  className="container py-5">
      <h2 data-aos="fade-up" className=" fw-bold display-5 text-primary-emphasis text-opacity-75 lh-1 mb-3 border-bottom" >
        Enseñanzas
      </h2>
      <div data-aos="fade-up" className="row g-5 py-5">
        <MinisteriosCard
          Video="https://www.youtube.com/embed/WLdzXhdX24w?si=2T22JmH_PIlY2xAz"
          Title="Cómo está tu Fe con Dios"
        />
        <MinisteriosCard
          Video="https://www.youtube.com/embed/qwsT58tl2do?si=CRUfSVbQ1ufolYHS"
          Title="Que el Espíritu de Dios no te abandone"
        />
        <MinisteriosCard
          Video="https://www.youtube.com/embed/-UP64HaN2Hk?si=HtVLGEA9m1c2OShl"
          Title="Protegidos por Dios"
        />
        <MinisteriosCard
          Video="https://www.youtube.com/embed/sT1jGaD9XZQ?si=eRxNCvM08R13jff7"
          Title="Estamos en las manos de Dios"
        />
        <MinisteriosCard
          Video="https://www.youtube.com/embed/cUMPPfnGCoA?si=IGe4hvSC2ISglgDs"
          Title="La salvación es eterna!"
        />
         <MinisteriosCard
          Video="https://www.youtube.com/embed/WIxWbFOnpb0?si=iFkbCvipByHkQ-Zw"
          Title="La oración tiene poder"
        />
        <MinisteriosCard
          Video="https://www.youtube.com/embed/Cy5U_rgiP6M?si=zACzD44mK_kMZ1Yq"
          Title="La bendición con Fe"
        />
        <MinisteriosCard
          Video="https://www.youtube.com/embed/ccXGRqDQZMU?si=nuyUheOI5qjmJi73"
          Title="La Fe hace justicia"
        />
        <MinisteriosCard
          Video="https://www.youtube.com/embed/gJmbz6TQ9Zo?si=AQ9BaRBXUtjnTIiK"
          Title="Descubre el secreto de Dios"
        />
        <MinisteriosCard
          Video="https://www.youtube.com/embed/nELYAX8OzVk?si=I3TVvMW4zgTigPt4"
          Title="La humildad"
        />
      </div>
    </div>
  );
}

export default Ministerios;
