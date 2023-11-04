import React from "react";

const tolleyhouse =
  "https://user-images.githubusercontent.com/40181569/279143157-08299ac9-0aa1-4da0-88b1-fc03215822b9.jpeg";
const image = new Image();
image.src = tolleyhouse;

const corsImage = new Image();
corsImage.crossOrigin = "Anonymous";
corsImage.src = tolleyhouse + "?not=from-cache-please";

import "../AboutUs/AboutUs.css";

const TolleyHouse = () => (
  <div className="xl:mt-[100px]" id="tolley-house">
    {/* <div className="app__aboutus-overlay flex__center">
      <img src={images.entertainment} alt="entertainment logo" />
    </div> */}
    <div>
      <div>
        <h1 className="tolley-house text-white text-4xl xl:ml-[400px]">
          Tolley House
        </h1>
        {/* <img src={images.spoon} alt="about_spoon" className="spoon__img" /> */}
        <div className="tolley-house-p app__aboutus-content_about">
          <p
            className="p__raleway flex-wrap 2xl:text-lg"
            style={{ margin: "2rem 0", marginLeft: "-30px" }}
          >
            The Tolley House is the most storied Bed & Breakfast in Lynchburg,
            Tennessee. One of historic Lynchburg’s oldest antebellum homes,
            Tolley House, a boutique inn, was once owned by Lem Motlow and Lem
            Tolley, the former master distiller for Jack Daniel’s Distillery.
            The Tolley House is just a mile from Lynchburg’s town square, where
            you can visit shops and take in the beauty of the historic town.
          </p>
        </div>

        {/* <button type="button" className="custom__button">
          Know More
        </button> */}
      </div>
      <div className="app__aboutus-content_knife flex__center">
        {/* <img src={images.knife} alt="about_knife" /> */}
      </div>
      <div className="tolley-house-img">
        <img
          src={tolleyhouse}
          alt="tolley-house"
          className="w-[50%] h-[50%] rounded-xl xl:mt-[-250px] xl:ml-[860px] 2xl:mt-[-220px] 2xl:ml-[1080px]"
        />
        {/* <h1 className="headtext__cormorant">Our History</h1> */}
        {/* <img src={images.spoon} alt="about_spoon" className="spoon__img" /> */}
        {/* <img
          src={images.entertainment}
          className="w-[50%] h-[50%] rounded-xl xl:ml-[150px]"
        /> */}
        {/* <img
          src={tolleyhouse}
          alt="hospitality logo"
          className="w-[50%] h-[50%] rounded-xl xl:ml-[70px]"
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
  </div>
);

export default TolleyHouse;
