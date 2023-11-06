import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// humble baron stage performance
const url =
  "https://user-images.githubusercontent.com/40181569/278895986-21047f96-3340-441b-a3ec-889c159f9206.JPG";
const image = new Image();
image.src = url;

const url2 =
  "https://user-images.githubusercontent.com/40181569/278894550-594e6fa3-4394-46b6-8ad6-e6abec9df039.jpg";

const url3 =
  "https://user-images.githubusercontent.com/40181569/280422816-0003fd3a-99fd-4b17-8b3d-af2213d1fd90.jpeg";
const image3 = new Image();
image3.src = url3;

const url4 =
  "https://user-images.githubusercontent.com/40181569/279208483-33e9e79d-311b-431a-87f7-d92e6152c496.jpg";
const image4 = new Image();
image4.src = url4;

// usbank
const url5 =
  "https://user-images.githubusercontent.com/40181569/280851025-5d381001-2bce-4f95-bdb6-ab75dde7dbcf.jpg";
const image5 = new Image();
image4.src = url5;

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
      infiniteLoop
      autoPlay
      className="2xl:w-[1360px] 2xl:h-[880px] justify-center items-center 2xl:ml-[200px]"
    >
      <div>
        <img src={url} alt="humble-baron" className="" />
      </div>
      <div>
        <img src={url2} alt="mixologists" />
      </div>
      <div>
        <img src={url3} alt="mixologists" />
      </div>
      <div>
        <img src={url4} alt="mixologists" />
      </div>
      <div>
        <img src={url5} alt="mixologists" />
      </div>
      <div>
        <img src={url6} alt="mixologists" />
      </div>
    </Carousel>
  );
};

export default Gallery2;
