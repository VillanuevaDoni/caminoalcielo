import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Church1 from '/church1.jpg'

function Galeriacomp() {


// const files = fs.readdirSync('/public') ;

// console.log(files);

  const images = [
    {
      original: {Church1},
      thumbnail: {Church1},
      originalHeight: "1000",
      originalWidth: "600",
      thumbnailHeight: "75",
      thumbnailWidth: "150",
    },
    {
        original: "/church2.jpg",
        thumbnail: "/church2.jpg",
        originalHeight: "1000",
        originalWidth: "600",
        thumbnailHeight: "75",
        thumbnailWidth: "150",
      },
      {
        original: "/church3.jpg",
        thumbnail: "/church3.jpg",
        originalHeight: "1000",
        originalWidth: "600",
        thumbnailHeight: "75",
        thumbnailWidth: "150",
      },
      {
        original: "/church4.jpg",
        thumbnail: "/church4.jpg",
        originalHeight: "1000",
        originalWidth: "600",
        thumbnailHeight: "75",
        thumbnailWidth: "150",
      },
      {
        original: "/church5.jpg",
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
