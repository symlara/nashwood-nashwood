import React from "react";

const url =
  "https://user-images.githubusercontent.com/40181569/277801683-cbffb703-5818-4ddf-a675-8c32909875fb.jpg";
const image = new Image();
image.src = url;

const url2 =
  "https://user-images.githubusercontent.com/40181569/279208483-33e9e79d-311b-431a-87f7-d92e6152c496.jpg";
const image2 = new Image();
image.src = url2;

const url3 =
  "https://user-images.githubusercontent.com/40181569/279143157-08299ac9-0aa1-4da0-88b1-fc03215822b9.jpeg";
const image3 = new Image();
image.src = url3;

const corsImage = new Image();
corsImage.crossOrigin = "Anonymous";
corsImage.src = url + "?not=from-cache-please";

import "../AboutUs/AboutUs.css";
import HumbleBaron from "../HumbleBaron/HumbleBaron";
import TolleyHouse from "../TolleyHouse/TolleyHouse";

const Hospitality = () => (
  <div
    className="app__aboutus w-full app__bg flex__center section__padding"
    id="hospitality"
  >
    {/* <div className="app__aboutus-overlay flex__center">
      <img src={images.entertainment} alt="entertainment logo" />
    </div> */}
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant xl:ml-[400px]">Hospitality</h1>
        {/* <img src={images.spoon} alt="about_spoon" className="spoon__img" /> */}
        <p
          className="p__raleway flex-wrap 2xl:text-lg"
          style={{ margin: "2rem 0", marginLeft: "-30px" }}
        >
          Esse incididunt exercitation fugiat ullamco sunt aute ut tempor enim
          aliquip enim id. Reprehenderit voluptate cillum consequat ex ut ex
          quis consectetur excepteur tempor deserunt labore. Ut quis dolor
          occaecat deserunt pariatur cupidatat sunt exercitation pariatur
          commodo. Ut excepteur excepteur Lorem enim anim aliqua ex nostrud et
          ipsum consequat minim adipisicing. Esse ullamco aute velit aliquip in
          in voluptate minim in mollit.
        </p>

        <HumbleBaron />
        <TolleyHouse />
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
    {/* <div className="">
      <img
        src={url2}
        alt="humble-baron-bar"
        className="w-[100%] h-[100%] rounded-xl xl:mt-[400px]"
      />

      <img
        src={url3}
        alt="humble-baron-bar"
        className="w-[100%] h-[100%] rounded-xl xl:mt-[50px]"
      />
    </div> */}
  </div>
);

export default Hospitality;
