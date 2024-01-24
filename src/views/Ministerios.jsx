import ImgKids from "../assets/kids.jpg";
import ImgMen from "../assets/friends men.jpg";
import ImgWomen from "../assets/friends women.jpg";
import ImgAlabanza from "../assets/alabanza.jpg";
import MinisteriosCard from "../components/MinisteriosCard";

function Ministerios() {
  return (
    <div className="container py-5">
      <h2 className="display-5 text-body-emphasis lh-1 mb-3 border-bottom">
        Ministerios
      </h2>
      <div className="row g-5 py-5">
        <MinisteriosCard
          Img={ImgKids}
          Title="Ninos"
          Text="This card has supporting text below as a natural lead-in to
                additional content."
        />
        <MinisteriosCard
          Img={ImgMen}
          Title="Caballeros"
          Text="This card has supporting text below as a natural lead-in to
                additional content."
        />
        <MinisteriosCard
          Img={ImgWomen}
          Title="Damas"
          Text="This card has supporting text below as a natural lead-in to
                additional content."
        />
        <MinisteriosCard
          Img={ImgAlabanza}
          Title="Alabanza"
          Text="This card has supporting text below as a natural lead-in to
                additional content."
        />
      </div>
    </div>
  );
}

export default Ministerios;
