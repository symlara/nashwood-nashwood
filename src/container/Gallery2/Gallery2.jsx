import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import LazyLoad from "react-lazy-load";

// humble baron stage performance
const url =
  "https://user-images.githubusercontent.com/40181569/278895986-21047f96-3340-441b-a3ec-889c159f9206.JPG";
const image = new Image();
image.src = url;

//mixoligists
const url2 =
  "https://user-images.githubusercontent.com/40181569/278894550-594e6fa3-4394-46b6-8ad6-e6abec9df039.jpg";

//tolley house
const url3 =
  "https://user-images.githubusercontent.com/40181569/279143157-08299ac9-0aa1-4da0-88b1-fc03215822b9.jpeg";
const image3 = new Image();
image3.src = url3;

// humble baron bar
const url4 =
  "https://user-images.githubusercontent.com/40181569/279208483-33e9e79d-311b-431a-87f7-d92e6152c496.jpg";
const image4 = new Image();
image4.src = url4;

// usbank
const url5 =
  "https://user-images.githubusercontent.com/40181569/280851025-5d381001-2bce-4f95-bdb6-ab75dde7dbcf.jpg";
const image5 = new Image();
image4.src = url5;

// gazette building
const url6 =
  "https://user-images.githubusercontent.com/40181569/280851835-8014fae7-b5e4-4fca-a47a-71d74b387422.jpg";
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
      className="2xl:w-[1360px] 2xl:h-[880px] xl:w-[1000px] justify-center items-center xl:mt-[100px] xl:ml-[200px] 2xl:ml-[200px]"
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
          <img src={url3} alt="mixologists" />
        </LazyLoad>
      </div>
      <div>
        <LazyLoad height="100%">
          <img src={url4} alt="mixologists" />
        </LazyLoad>
      </div>
      <div>
        <LazyLoad height="100%">
          <img src={url5} alt="mixologists" />
        </LazyLoad>
      </div>
      <div>
        <LazyLoad height="100%">
          <img src={url6} alt="mixologists" />
        </LazyLoad>
      </div>
    </Carousel>
  );
};

export default Gallery2;
