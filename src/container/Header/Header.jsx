import React from "react";
import SubHeading from "../../components/SubHeading";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../../../utils/motion";

import { Link, BrowserRouter } from "react-router-dom";

//entertainment image
const url =
  "https://user-images.githubusercontent.com/40181569/283946750-fa268f46-bf52-44bb-a926-a8885a0fa9c4.jpg";
const image = new Image();
image.src = url;

//hospitality
const url2 =
  "https://user-images.githubusercontent.com/40181569/283947204-d4a710b7-1319-47f0-aca3-8f78b17d5139.jpg";
const image2 = new Image();
image2.src = url2;

//real-estate
const url4 =
  "https://user-images.githubusercontent.com/40181569/283947364-dfbcd97c-2211-4b94-ab01-c19a12e8c8f7.jpg";
const image4 = new Image();
image4.src = url4;

const corsImage = new Image();
corsImage.crossOrigin = "Anonymous";
corsImage.src = url + "?not=from-cache-please";

import "./Header.css";

const Header = () => (
  <div
    className="app__header app__wrapper section__padding bg-[#1a3a61]"
    id="home"
  >
    <div className="app__wrapper_info 2xl:ml-[-50px] 2xl:mt-[-400px] whitespace-normal">
      {/* <SubHeading title="Nashwood, Inc." /> */}
      {/* <h1 className="app__header-h1">The Key to Fine Dining</h1> */}
      {/* <p
        className="p__raleway 2xl:text-lg whitespace-normal"
        style={{ margin: "2rem 0" }}
      >
        Nashwood, Inc. is a real estate, hospitality, and entertainment company
        headquartered in Bedford County Tennessee. Nashwood’s span of work
        includes ownership and operation of a diverse real estate portfolio,
        management of enterprises in the food and beverage sector, and a wide
        range of entertainment interests – ranging from content production,
        artist development, and physical production services.
      </p> */}
      {/* <button type="button" className="custom__button">
        Explore Menu
      </button> */}
    </div>

    {/* create way to link off these images */}

    {/* <div className="app__wrapper_img gap-2 xl:ml-[490px]">
      <img
        src={url}
        alt="entertainment logo"
        className="xl:ml-[-150px] 2xl:ml-[-380px] rounded-xl entertainment-logo cursor-pointer"
      />

      <img src={url2} alt="hospitality logo" className="rounded-xl " /> */}

    {/* <img src={url3} alt="humblebaron logo" className="rounded-xl" /> */}

    {/* <img src={url4} alt="realestate logo" className="rounded-xl" />
    </div> */}
    <div className="flex w-[30%] xl:w-[50%] justify-center items-center header-imgs 2xl:ml-[270px] 2xl:mt-[-250px] 2xl:w-[100%]">
      {" "}
      {/* <a href="/">
        <img className="cursor-pointer rounded-xl xl:w-[80%]" src={url} />
      </a> */}
      {/* <Link to="/entertainment"> */}
      <div>
        <motion.img
          src={url}
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer entertainment rounded-xl 2xl:w-[40%] justify-center xl:w-[70%] xl:mt-[-310px] xl:ml-[80px]"
        />
      </div>
      {/* </Link> */}
      {/* <Link to="/hospitality"> */}
      <div>
        <motion.img
          src={url2}
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer rounded-xl hospitality-header xl:w-[75%] 2xl:w-[45%] xl:mt-[-310px] xl:ml-[20px]"
        />
      </div>
      {/* </Link> */}
      {/* <Link to="/real-estate"> */}
      <div>
        <motion.img
          src={url4}
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 1.1 }}
          className="cursor-pointer rounded-xl xl:w-[80%] 2xl:mt-[-305px] 2xl:w-[48%] xl:mt-[-310px] xl:ml-[-25px]"
        />
      </div>
      {/* </Link> */}
    </div>
  </div>
);

export default Header;
