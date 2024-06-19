function MinisteriosCard(props) {
  return (
    <div className="col-md-4">
      <div className="card text-bg-dark h-100 ">
        {/* <img
          className="card-img-top"
          src={props.Img}
          alt="kids"
          width="200"
          height="250"
          loading="lazy"
        /> */}
        <div className="ratio ratio-16x9">
          <iframe
            width="200"
            height="250"
            src={props.Video}
            title="Cómo está tu FE con Dios"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.Title}</h5>
          {/* <p className="card-text text-muted">{props.Text}</p> */}
        </div>
      </div>
    </div>
  );
}

export default MinisteriosCard;
