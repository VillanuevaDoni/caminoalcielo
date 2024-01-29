import ImageGallery from "../components/Galeriacomp";


function Galeria() {


  return (
    <div className="container py-5">
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
