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
  <div className="mt-10" id="humble-baron">
    {/* <div className="app__aboutus-overlay flex__center">
      <img src={images.entertainment} alt="entertainment logo" />
    </div> */}
    <div className="">
      <div className="">
        <h3 className="humble-baron text-white text-4xl xl:ml-[400px]">
          Humble Baron
        </h3>
        {/* <img src={images.spoon} alt="about_spoon" className="spoon__img" /> */}
        <div className="longest-bar">
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
            Southern fare alongside craft whiskey cocktails and will showcase
            live music several nights a week. Humble Baron is a gathering place
            where everyone has a seat at the table, bringing people together
            over premium spirits, exceptional food and lively music.
          </p>
        </div>

        {/* <button type="button" className="custom__button">
          Know More
        </button> */}
      </div>

      <div className="app__aboutus-content_history">
        {/* <img
          src={humblebaron}
          alt="humblebaron logo"
          className="w-[50%] h-[50%] rounded-xl xl:ml-[70px]"
        /> */}
      </div>
    </div>
  </div>
);

export default HumbleBaron;
