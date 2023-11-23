import React from "react";
import Header from "../Header/Header";

import "../AboutUs/AboutUs.css";

const entertainment =
  "https://user-images.githubusercontent.com/40181569/280852826-8d617545-ea11-46a8-8afe-44f5315b2b15.JPG";
const image = new Image();
image.src = entertainment;

const Entertainment = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="entertainment"
  >
    {/* <div className="app__aboutus-overlay flex__center">
      <img src={images.entertainment} alt="entertainment logo" />
    </div> */}
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about 2xl:mt-[-200px] xl:mt-[70px]">
        <h1 className="headtext__cormorant">Entertainment</h1>

        {/* <img src={images.spoon} alt="about_spoon" className="spoon__img" /> */}
        <p
          className="p__raleway flex-wrap 2xl:text-lg"
          style={{ margin: "2rem 0", marginLeft: "-30px" }}
        >
          With leadership representing more than 60 years combined in key roles
          in the entertainment industry, Nashwood, Inc. is uniquely positioned
          to develop recording artists, audiovisual content, as well as serve as
          a production partner for entertainment and corporate events.
        </p>

        {/* <button type="button" className="custom__button">
          Know More
        </button> */}
      </div>
      <div className="app__aboutus-content_knife flex__center">
        {/* <img src={images.knife} alt="about_knife" /> */}
      </div>
      <div className="app__aboutus-content_history 2xl:mt-[100px]">
        <img src={entertainment} alt="singer" className="" />
      </div>
    </div>
  </div>
);

export default Entertainment;
