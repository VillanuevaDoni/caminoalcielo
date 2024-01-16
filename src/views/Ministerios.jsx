import ImgKids from "../assets/kids.jpg";
import ImgMen from "../assets/friends men.jpg";
import ImgWomen from "../assets/friends women.jpg";
import ImgAlabanza from '../assets/alabanza.jpg'

function Ministerios() {
  return (
    <div className="container py-5">
      <h2 className="display-5 text-body-emphasis lh-1 mb-3 border-bottom">Ministerios</h2>
      <div className="row g-5 py-5">
        <div className="col-md-4">
          <div className="card h-100">
            <img
              className="card-img-top"
              src={ImgKids}
              alt="kids"
              width="200"
              height="250"
              loading="lazy"
            />
            <div className="card-body">
              <h5 className="card-title">Niños</h5>
              <p className="card-text text-muted">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <img
              className="card-img-top"
              src={ImgMen}
              alt="friends"
              width="200"
              height="250"
              loading="lazy"
            />
            <div className="card-body">
              <h5 className="card-title">Caballeros</h5>
              <p className="card-text text-muted">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <img
              className="card-img-top"
              src={ImgWomen}
              alt="friends"
              width="200"
              height="250"
              loading="lazy"
            />
            <div className="card-body">
              <h5 className="card-title">Damas</h5>
              <p className="card-text text-muted">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <img
              className="card-img-top"
              src={ImgAlabanza}
              alt="friends"
              width="200"
              height="250"
              loading="lazy"
            />
            <div className="card-body">
              <h5 className="card-title">Alabanza</h5>
              <p className="card-text text-muted">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Ministerios;
