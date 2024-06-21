import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";

//components
import Navigation from "./components/Navigation";

//views
import Home from "./views/Home";
import Contacto from "./views/Contacto";
import Galeria from "./views/Galeria";
import Ministerios from "./views/Ministerios";
import Noticias from "./views/Noticias";
import QuienesSomos from "./views/QuienesSomos";
import EnQueCreemos from "./views/EnQueCreemos";
import Sirviendo from "./views/Sirviendo";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />}/>
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/ministerios" element={<Ministerios />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/quienesSomos" element={<QuienesSomos />} />
          <Route path="/queCreemos" element={<EnQueCreemos />} />
          <Route path="/sirviendo" element={<Sirviendo />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
