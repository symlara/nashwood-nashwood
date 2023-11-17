import React from "react";
// import nashwoodlogo from "../../assets/nashwood-nw-icon-logo-wise-gray-rgb-640px-w-72ppi.png";
// import keithweaver from "../../assets/KeithWeaver.jpg";

const url =
  "https://user-images.githubusercontent.com/40181569/277809425-75a953e0-01fd-413f-b4c3-d47a1d21c1a8.png";
const image = new Image();
image.src = url;

const url2 =
  "https://user-images.githubusercontent.com/40181569/277808266-95f14a68-7d4b-458b-ab26-8a0e68fb32de.jpg";
const image2 = new Image();
image2.src = url2;

const corsImage = new Image();
corsImage.crossOrigin = "Anonymous";
corsImage.src = url + "?not=from-cache-please";

import "../AboutUs/AboutUs.css";
import LazyLoad from "react-lazy-load";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant underline about">About Us</h1>
        {/* <img src={images.spoon} alt="about_spoon" className="spoon__img" /> */}
        <p
          className="p__raleway flex-wrap 2xl:text-lg"
          style={{ margin: "2rem 0" }}
        >
          Keith Weaver is the founder and CEO of Nashwood, Inc., which is a
          leading real estate, entertainment, and hospitality company. Keith is
          experienced in developing business concepts into highly successful
          commercial enterprises. He is an accomplished entrepreneur and
          corporate executive with over 25 years of experience establishing and
          leading notable companies in the spirits, real estate, hospitality,
          and entertainment sectors. Keith also co-founded Uncle Nearest Premium
          Whiskey in 2016, which is the fastest-growing American whiskey or
          bourbon in U.S. history.
        </p>
        {/* <button type="button" className="custom__button">
          Know More
        </button> */}
      </div>

      <div className="keith">
        <LazyLoad height="100%">
          <img
            alt="keithweaver"
            src={url2}
            className=" rounded-xl xl:ml-[70px] z-[100]"
          />
        </LazyLoad>
      </div>
    </div>
  </div>
);

export default AboutUs;
