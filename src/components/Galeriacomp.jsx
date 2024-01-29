import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";


function Galeriacomp() {

  const Images = [
    {
      original: "../assets/Church.jpg",
      thumbnail: "../assets/Church.jpg",
      originalHeight: "1000",
      originalWidth: "600",
      thumbnailHeight: "75",
      thumbnailWidth: "150",
    },
    {
      original: "/Church2.jpg",
      thumbnail: "/Church2.jpg",
      originalHeight: "1000",
      originalWidth: "600",
      thumbnailHeight: "75",
      thumbnailWidth: "150",
    },
    {
      original: "/Church3.jpg",
      thumbnail: "/Church3.jpg",
      originalHeight: "1000",
      originalWidth: "600",
      thumbnailHeight: "75",
      thumbnailWidth: "150",
    },
    {
      original: "/Church4.jpg",
      thumbnail: "/Church4.jpg",
      originalHeight: "1000",
      originalWidth: "600",
      thumbnailHeight: "75",
      thumbnailWidth: "150",
    },
    {
      original: "/Church5.jpg",
      thumbnail: "/Church5.jpg",
      originalHeight: "1000",
      originalWidth: "600",
      thumbnailHeight: "75",
      thumbnailWidth: "150",
    },
  ];

  return (
    <div>
      <ImageGallery
        items={Images}
        showBullets={true}
        autoPlay={true}
        slideDuration={1000}/>
    </div>
  );
}

export default Galeriacomp;
