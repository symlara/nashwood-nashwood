import React from "react";
// import nashwoodlogo from "../../assets/nashwood-nw-icon-logo-wise-gray-rgb-640px-w-72ppi.png";
// import keithweaver from "../../assets/KeithWeaver.jpg";

const keith =
  "https://user-images.githubusercontent.com/40181569/277808266-95f14a68-7d4b-458b-ab26-8a0e68fb32de.jpg";
const image = new Image();
image.src = keith;

const corsImage = new Image();
corsImage.crossOrigin = "Anonymous";
corsImage.src = keith + "?not=from-cache-please";

import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      {/* <img src={nashwoodlogo} alt="nashwood logo" /> */}
    </div>
    <div className="app__aboutus-content flex__center 2xl:mt-[-200px]">
      <div className="app__aboutus-content_about 2xl:mt-[-300px]">
        <h1 className="headtext__cormorant">About Us</h1>
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
      <div className="app__aboutus-content_knife flex__center">
        {/* <img src={images.knife} alt="about_knife" /> */}
      </div>
      <div className="app__aboutus-content_history">
        <img
          alt="keithweaver"
          src={keith}
          className="w-[50%] h-[50%] rounded-xl xl:ml-[70px] keith"
        />
      </div>
    </div>
  </div>
);

export default AboutUs;
