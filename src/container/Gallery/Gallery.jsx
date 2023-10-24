import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

const url =
  "https://user-images.githubusercontent.com/40181569/277797876-79277a2e-123d-4588-9478-ab7b5bc90e39.jpeg";
const image = new Image();
image.src = url;

const url2 =
  "https://user-images.githubusercontent.com/40181569/277817039-8781bf2e-3d04-4b03-89e1-38d9469d4daa.jpg";
const image2 = new Image();
image2.src = url2;

const url3 =
  "https://user-images.githubusercontent.com/40181569/277820515-f2e4cf25-c434-4a4b-b968-4e70eab89301.jpg";
const image3 = new Image();
image3.src = url3;

const url4 =
  "https://user-images.githubusercontent.com/40181569/277821037-940ea1c1-86dd-4ca8-8527-423c997aebdb.jpg";
const image4 = new Image();
image4.src = url4;

const corsImage = new Image();
corsImage.crossOrigin = "Anonymous";
corsImage.src = url + "?not=from-cache-please";

import "./Gallery.css";

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p
          className="p__opensans"
          style={{ color: "#AAAAAA", marginTop: "2rem" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        {/* <button type="button" className="custom__button">
          View More
        </button> */}
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[url, url2, url3, url4].map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery_image" />
              {/* <BsInstagram className="gallery__image-icon" /> */}
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
