import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import LazyLoad from "react-lazy-load";

// humble baron stage performance
const url =
  "https://user-images.githubusercontent.com/40181569/283178588-9410673c-f6cc-474f-a7f2-52442481196c.jpg";
const image = new Image();
image.src = url;

//mixoligists
const url2 =
  "https://user-images.githubusercontent.com/40181569/283178958-6aeaa917-f3b7-447b-9de3-f514eebbf37a.jpg";

//tolley house
const url3 =
  "https://user-images.githubusercontent.com/40181569/283181119-e4357d17-ae9d-4d6e-a95e-01cc77f937be.jpg";
const image3 = new Image();
image3.src = url3;

// humble baron bar
const url4 =
  "https://user-images.githubusercontent.com/40181569/283180046-c153bb9b-eeee-4172-b749-9fcdfc4acbd4.jpg";
const image4 = new Image();
image4.src = url4;

// usbank
const url5 =
  "https://user-images.githubusercontent.com/40181569/283185461-da9c41a8-f3c3-4b5e-9f5f-9e00b73cbb89.jpg";
const image5 = new Image();
image4.src = url5;

// gazette building
const url6 =
  "https://user-images.githubusercontent.com/40181569/283185081-96b8387c-fca6-4e4d-8c6b-7af101ccb110.jpg";
const image6 = new Image();
image4.src = url6;

// const corsImage = new Image();
// corsImage.crossOrigin = "Anonymous";
// corsImage.src = url + "?not=from-cache-please";

const Gallery2 = () => {
  return (
    <Carousel
      infiniteLoop={true}
      autoPlay={true}
      className="2xl:w-[1360px] 2xl:h-[880px] xl:w-[1000px] xl:h-[700px] justify-center items-center xl:mt-[80px] xl:ml-[200px] 2xl:ml-[200px]"
    >
      <div>
        <LazyLoad height="100%">
          <img src={url} alt="humble-baron" className="" />
        </LazyLoad>
      </div>
      <div>
        <LazyLoad height="100%">
          <img src={url2} alt="mixologists" />
        </LazyLoad>
      </div>
      <div>
        <LazyLoad height="100%">
          <img
            src={url3}
            alt="tolley-house"
            className="xl:h-[625px]"
            id="tolley"
          />
        </LazyLoad>
      </div>
      <div>
        <LazyLoad height="100%">
          <img src={url4} alt="humble-baron-bar" />
        </LazyLoad>
      </div>
      <div>
        <LazyLoad height="100%">
          <img src={url5} alt="usbank" />
        </LazyLoad>
      </div>
      <div>
        <LazyLoad height="100%">
          <img src={url6} alt="gazette-building" />
        </LazyLoad>
      </div>
    </Carousel>
  );
};

export default Gallery2;
