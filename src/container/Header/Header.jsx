import React from "react";
import SubHeading from "../../components/SubHeading";
import { motion } from "framer-motion";
import {
  slideIn,
  staggerContainer,
  textVariant,
  fadeIn,
} from "../../../utils/motion";
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
  <section>
    <div
      className="app__header app__wrapper section__padding "
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
      <div className="flex xl:w-[50%] xl:ml-[700px] justify-center items-center header-imgs 2xl:ml-[270px] 2xl:mt-[-250px] 2xl:w-[100%]">
        {" "}
        {/* <a href="/">
        <img className="cursor-pointer rounded-xl xl:w-[80%]" src={url} />
      </a> */}
        {/* <Link to="/entertainment"> */}
        <div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <motion.div variants={fadeIn("left", "tween", 0.3, 1)}>
              <img
                src={url}
                alt="entertainment"
                className="rounded-xl xl:w-[70%] xl:mt-[-310px] xl:ml-[80px]"
              />
            </motion.div>
          </motion.div>
        </div>
        {/* </Link> */}
        {/* <Link to="/hospitality"> */}
        {/* hospitality section */}
        <div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <motion.div variants={fadeIn("left", "tween", 0.3, 1)}>
              <img
                src={url2}
                alt="hospitality"
                className="rounded-xl xl:w-[77%] xl:mt-[-310px] xl:ml-[20px]"
              />
            </motion.div>
          </motion.div>
        </div>
        {/* </Link> */}
        {/* <Link to="/real-estate"> */}
        {/* real estate section */}
        <div>
          {/* <motion.img
            src={url4}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 1.1 }}
            className="cursor-pointer rounded-xl xl:w-[80%] 2xl:mt-[-305px] 2xl:w-[48%] xl:mt-[-310px] xl:ml-[-25px]"
          /> */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <motion.div variants={fadeIn("left", "tween", 0.3, 1)}>
              <img
                src={url4}
                alt="real-estate"
                className="rounded-xl xl:w-[82%] xl:mt-[-310px] xl:ml-[-20px]"
              />
            </motion.div>
          </motion.div>
        </div>
        {/* </Link> */}
      </div>
    </div>
  </section>
);

export default Header;
