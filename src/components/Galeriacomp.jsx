import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Church1 from "../assets/church1.jpg";
import Church2 from "../assets/church2.jpg";
import Church3 from "../assets/church3.jpg";
import Church4 from "../assets/church4.jpg";
import Church5 from "../assets/church5.jpg";

function Galeriacomp() {
  // const files = fs.readdirSync('/public') ;

  // console.log(files);

  const images = [
    {
      original: { Church1 },
      thumbnail: { Church1 },
      originalHeight: "1000",
      originalWidth: "600",
      thumbnailHeight: "75",
      thumbnailWidth: "150",
    },
    {
      original: { Church2 },
      thumbnail: { Church2 },
      originalHeight: "1000",
      originalWidth: "600",
      thumbnailHeight: "75",
      thumbnailWidth: "150",
    },
    {
      original: { Church3 },
      thumbnail: { Church3 },
      originalHeight: "1000",
      originalWidth: "600",
      thumbnailHeight: "75",
      thumbnailWidth: "150",
    },
    {
      original: { Church4 },
      thumbnail: { Church4 },
      originalHeight: "1000",
      originalWidth: "600",
      thumbnailHeight: "75",
      thumbnailWidth: "150",
    },
    {
      original: { Church5 },
      thumbnail: { Church5 },
      originalHeight: "1000",
      originalWidth: "600",
      thumbnailHeight: "75",
      thumbnailWidth: "150",
    },
  ];

  return (
    <div>
      <ImageGallery
        items={images}
        showBullets={true}
        autoPlay={true}
        slideDuration={1000}
      />
    </div>
  );
}

export default Galeriacomp;
