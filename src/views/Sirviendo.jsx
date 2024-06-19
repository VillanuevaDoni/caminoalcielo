//import SirviendoCard from "../components/SirviendoCard";
import Contact from '../components/ContactCmp'
import AOS from "aos";
import {useEffect} from 'react'

function Sirviendo() {

  useEffect(()=>{
    AOS.init({duration:1000});
    window.scroll(0,0)
  })
  
  return (
    <div data-aos="fade-up"  className="container px-4 py-5" id="featured-3">
      <Contact/>
    </div>
  );
}

export default Sirviendo;
