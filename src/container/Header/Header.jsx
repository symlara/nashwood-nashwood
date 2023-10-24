import React from "react";
import SubHeading from "../../components/SubHeading";

const url =
  "https://user-images.githubusercontent.com/40181569/277799722-e94ea8a9-f693-4942-9c61-1bb038a441c3.jpg";
const image = new Image();
image.src = url;

const url2 =
  "https://user-images.githubusercontent.com/40181569/277801683-cbffb703-5818-4ddf-a675-8c32909875fb.jpg";
const image2 = new Image();
image2.src = url2;

const url3 =
  "https://user-images.githubusercontent.com/40181569/277802030-f1466ded-fa99-4393-909f-6d2f32f60a0c.jpg";
const image3 = new Image();
image3.src = url3;

const url4 =
  "https://user-images.githubusercontent.com/40181569/277804148-36c016ba-2b7c-4219-bedf-ca9025c353b0.jpg";
const image4 = new Image();
image4.src = url4;

const corsImage = new Image();
corsImage.crossOrigin = "Anonymous";
corsImage.src = url + "?not=from-cache-please";

import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info 2xl:ml-[-50px]">
      <SubHeading title="Nashwood, Inc." />
      {/* <h1 className="app__header-h1">The Key to Fine Dining</h1> */}
      <p className="p__raleway 2xl:text-xl" style={{ margin: "2rem 0" }}>
        Nashwood, Inc. is a real estate, hospitality, and entertainment company
        headquartered in Bedford County Tennessee. Nashwood’s span of work
        includes ownership and operation of a diverse real estate portfolio,
        management of enterprises in the food and beverage sector, and a wide
        range of entertainment interests – ranging from content production,
        artist development, and physical production services.
      </p>
      {/* <button type="button" className="custom__button">
        Explore Menu
      </button> */}
    </div>

    <div className="app__wrapper_img gap-2 xl:ml-[490px]">
      {/* <img src={images.welcome} alt="header img" /> */}
      <img
        src={url}
        alt="entertainment logo"
        className="xl:ml-[-300px] 2xl:ml-[-380px] rounded-xl entertainment-logo"
      />
      <img src={url2} alt="hospitality logo" className="rounded-xl" />
      <img src={url3} alt="humblebaron logo" className="rounded-xl" />
      <img src={url4} alt="realestate logo" className="rounded-xl" />

      {/* <img src={images.hospitality} alt="header img" />
      <img src={images.production} alt="header img" />
      <img src={images.realestate} alt="header img" /> */}
    </div>
  </div>
);

export default Header;
