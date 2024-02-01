function Galeriacomp(props) {
  return (
    <div className="container p-2">
     
        <img
          className="img-fluid rounded-3 shadow-lg"
          src={props.Img}
          alt="imagen"
          width="auto"
          height="auto"
          loading="lazy"
          
        />
      
     </div>
  );
}

export default Galeriacomp;
