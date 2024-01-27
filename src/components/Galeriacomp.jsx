import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
// import fs from 'node:fs';

function Galeriacomp() {


// const files = fs.readdirSync('/public') ;

// console.log(files);

  const images = [
    {
      original: "/public/church1.jpg",
      thumbnail: "/church1.jpg",
      originalHeight: "1000",
      originalWidth: "600",
      thumbnailHeight: "75",
      thumbnailWidth: "150",
    },
    {
        original: "/public/church2.jpg",
        thumbnail: "/church2.jpg",
        originalHeight: "1000",
        originalWidth: "600",
        thumbnailHeight: "75",
        thumbnailWidth: "150",
      },
      {
        original: "/public/church3.jpg",
        thumbnail: "/church3.jpg",
        originalHeight: "1000",
        originalWidth: "600",
        thumbnailHeight: "75",
        thumbnailWidth: "150",
      },
      {
        original: "/public/church4.jpg",
        thumbnail: "/church4.jpg",
        originalHeight: "1000",
        originalWidth: "600",
        thumbnailHeight: "75",
        thumbnailWidth: "150",
      },
      {
        original: "/public/church5.jpg",
        thumbnail: "/church5.jpg",
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
