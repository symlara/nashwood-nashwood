import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

const url =
  "https://user-images.githubusercontent.com/40181569/278895986-21047f96-3340-441b-a3ec-889c159f9206.JPG";
const image = new Image();
image.src = url;

const url2 =
  "https://user-images.githubusercontent.com/40181569/278894550-594e6fa3-4394-46b6-8ad6-e6abec9df039.jpg";
const image2 = new Image();
image2.src = url2;

const url3 =
  "https://user-images.githubusercontent.com/40181569/280422816-0003fd3a-99fd-4b17-8b3d-af2213d1fd90.jpeg";
const image3 = new Image();
image3.src = url3;

const url4 =
  "https://user-images.githubusercontent.com/40181569/279208483-33e9e79d-311b-431a-87f7-d92e6152c496.jpg";
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
    <>
      <div className="app__gallery flex__center">
        {/* <div className="app__gallery-content">
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p
          className="p__opensans"
          style={{ color: "#AAAAAA", marginTop: "2rem" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p> */}
        {/* <button type="button" className="custom__button">
          View More
        </button> */}
        {/* </div> */}
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
      {/* <div className="text-white bg-[#0c0c0c]  xl:pb-[20px] relative">
        <h1 className="xl:ml-[350px] xl:mt-[-40px]">Humble Baron Stage</h1>
        <h1 className="xl:ml-[900px] xl:mt-[-30px]">Mixoligist</h1>
        <h1 className="xl:ml-[1380px] xl:mt-[-30px]">Tolley House</h1>
      </div> */}
    </>
  );
};

export default Gallery;
