
function MinisteriosCard(props) {
  return (
    <div className="col-md-4">
    <div className="card h-100">
      <img
        className="card-img-top"
        src={props.Img}
        alt="kids"
        width="200"
        height="250"
        loading="lazy"
      />
      <div className="card-body">
        <h5 className="card-title">{props.Title}</h5>
        <p className="card-text text-muted">
          {props.Text}
        </p>
      </div>
    </div>
  </div>
  )
}

export default MinisteriosCard