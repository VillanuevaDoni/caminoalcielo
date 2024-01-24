function SirviendoCard(props) {
  return (
    <div className="feature col h-100">
      <div className="feature-icon bg-primary bg-gradient">
        {/* <svg className="bi" width="1em" height="1em"><use xlink:href="#collection"></use></svg> */}
      </div>
      <h2>{props.Title}</h2>
      <p className="lead">{props.Text}</p>
      <a
        href={props.Reference}
        target="_blank"
        rel="noopener noreferrer"
        className="icon-link"
      >
        Ver más...
        {/* <svg className="bi" width="1em" height="1em"><use xlink:href="#chevron-right"></use></svg> */}
      </a>
    </div>
  );
}

export default SirviendoCard;
