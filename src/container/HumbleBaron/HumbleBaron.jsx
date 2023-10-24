import React from "react";

const humblebaron =
  "https://user-images.githubusercontent.com/40181569/277802030-f1466ded-fa99-4393-909f-6d2f32f60a0c.jpg";
const image = new Image();
image.src = humblebaron;

const corsImage = new Image();
corsImage.crossOrigin = "Anonymous";
corsImage.src = humblebaron + "?not=from-cache-please";

import "../AboutUs/AboutUs.css";

const HumbleBaron = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="humble-baron"
  >
    {/* <div className="app__aboutus-overlay flex__center">
      <img src={images.entertainment} alt="entertainment logo" />
    </div> */}
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Humble Baron</h1>
        {/* <img src={images.spoon} alt="about_spoon" className="spoon__img" /> */}
        <p
          className="p__raleway flex-wrap 2xl:text-lg"
          style={{ margin: "2rem 0", marginLeft: "-30px" }}
        >
          Humble Baron is Middle Tennessee’s newest restaurant, bar and
          entertainment venue, located on the property of the iconic Nearest
          Green Distillery in Shelbyville, Tennessee. Home to the World’s
          Longest Bar at 518-feet-long, Humble Baron is brought to life by
          co-founder of Uncle Nearest Premium Whiskey, Keith Weaver. A
          destination for locals and visitors alike, the venue offers elevated
          Southern fare alongside craft whiskey cocktails and will showcase live
          music several nights a week. Humble Baron is a gathering place where
          everyone has a seat at the table, bringing people together over
          premium spirits, exceptional food and lively music.
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
          src={humblebaron}
          alt="humblebaron logo"
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

export default HumbleBaron;
