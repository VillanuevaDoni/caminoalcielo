import ImgQuienesomos from "../assets/quienes somos.jpg";
import CreemosBiblia from "../assets/creemos-biblia.jpg";
import ImgPastor from "../assets/pastor.jpg"

function QuienesSomos() {
  return (
    <div className="container-fluid p-4">
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5 rounded-3 ">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={ImgQuienesomos}
              className="d-block mx-lg-auto img-fluid rounded-3 shadow-lg"
              alt="quienes somos"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Quienes somos
            </h1>
            <hr />
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              autem officiis beatae vero enim sequi magni possimus quasi
              praesentium inventore omnis repudiandae dolor ratione eaque
              similique id nemo iste ut voluptatibus, temporibus cumque a? Magni
              accusamus debitis id, ut deserunt laudantium aliquid ab placeat
              voluptate aliquam officiis laboriosam praesentium voluptatum illo
              sit autem quaerat ad, eos impedit laborum culpa eligendi
              voluptates voluptatibus? Sed nihil dolor incidunt non reiciendis
              deserunt alias harum facilis? Aliquid suscipit laborum est sequi?
              Quis laborum nulla, adipisci dolorem ullam, molestias amet esse
              minus cupiditate nobis rerum ea vel pariatur et aut assumenda
              atque similique, commodi quod.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              {/* <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button> */}
              {/* <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5 rounded-3 ">
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              En que creemos
            </h1>
            <hr />
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              autem officiis beatae vero enim sequi magni possimus quasi
              praesentium inventore omnis repudiandae dolor ratione eaque
              similique id nemo iste ut voluptatibus, temporibus cumque a? Magni
              accusamus debitis id, ut deserunt laudantium aliquid ab placeat
              voluptate aliquam officiis laboriosam praesentium voluptatum illo
              sit autem quaerat ad, eos impedit laborum culpa eligendi
              voluptates voluptatibus? Sed nihil dolor incidunt non reiciendis
              deserunt alias harum facilis? Aliquid suscipit laborum est sequi?
              Quis laborum nulla, adipisci dolorem ullam, molestias amet esse
              minus cupiditate nobis rerum ea vel pariatur et aut assumenda
              atque similique, commodi quod.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              {/* <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button> */}
              {/* <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button> */}
            </div>
          </div>
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={CreemosBiblia}
              className="d-block mx-lg-auto img-fluid rounded-3 shadow-lg"
              alt="en que creemos"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </div>

    <div className="container">
      <div className="card">
        {/* <div className="card-header"> */}
        <h5 className="card-title p-4 display-4 fw-bold">Pastores</h5>
        {/* </div> */}
        <div className="card-body">
          
          <p className="card-text fs-4 text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo iure saepe, magnam eligendi sequi quas provident rem expedita culpa ut reiciendis vero at, quos quibusdam dolorum dolores ab ipsam.
          </p>
        </div>
        <img  src={ImgPastor}  className="d-block mx-lg-auto img-fluid rounded-3 shadow-lg"
              alt="pastor"
              width="500"
              height="400"
              loading="lazy"/>
        <div className="d-grid gap-2 d-md-flex justify-content-md-center p-4">
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Ver más...</button>
            </div>
      </div>
      </div>

    </div>
  );
}

export default QuienesSomos;
