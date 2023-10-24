import React from "react";

const realestate =
  "https://user-images.githubusercontent.com/40181569/277804148-36c016ba-2b7c-4219-bedf-ca9025c353b0.jpg";
const image = new Image();
image.src = realestate;

const corsImage = new Image();
corsImage.crossOrigin = "Anonymous";
corsImage.src = realestate + "?not=from-cache-please";

import "../AboutUs/AboutUs.css";

const RealEstate = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="real-estate"
  >
    {/* <div className="app__aboutus-overlay flex__center">
      <img src={images.entertainment} alt="entertainment logo" />
    </div> */}
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Real Estate</h1>
        {/* <img src={images.spoon} alt="about_spoon" className="spoon__img" /> */}
        <p
          className="p__raleway flex-wrap 2xl:text-lg"
          style={{ margin: "2rem 0", marginLeft: "-30px" }}
        >
          Nashwood owns a range of commercial and residential property interests
          to include: The Shelbyville-Times Gazette Building, U.S. Bank
          Building, The Tolley House, Cedar Ridge Farm, as well as luxury
          residential real estate interests throughout the country.
        </p>
        {/* <button type="button" className="custom__button">
          Know More
        </button> */}
      </div>
      <div className="app__aboutus-content_knife flex__center">
        {/* <img src={images.knife} alt="about_knife" /> */}
      </div>
      <div className="app__aboutus-content_history">
        {/* <h1 className="headtext__cormorant">Our History</h1> */}
        {/* <img src={images.spoon} alt="about_spoon" className="spoon__img" /> */}
        {/* <img
          src={images.entertainment}
          className="w-[50%] h-[50%] rounded-xl xl:ml-[150px]"
        /> */}
        <img
          src={realestate}
          alt="realestate logo"
          className="w-[50%] h-[50%] rounded-xl xl:ml-[70px]"
        />

        {/* <p className="p__raleway">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p> */}
        {/* <button type="button" className="custom__button">
          Know More
        </button> */}
      </div>
    </div>
  </div>
);

export default RealEstate;
