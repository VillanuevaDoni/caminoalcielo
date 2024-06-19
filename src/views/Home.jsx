import LandingImage from '../components/LandingImg'
import { useEffect } from "react";

function Home() {
  
  useEffect(() => {
    window.scroll(0,0)
  });

  return (
    <div>
         <LandingImage />
    </div>

  )
}

export default Home
