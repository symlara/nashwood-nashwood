import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import { motion } from "framer-motion";
import {
  slideIn,
  staggerContainer,
  textVariant,
  fadeIn,
} from "../../../utils/motion";

// hospitality logo
const url =
  "https://user-images.githubusercontent.com/40181569/277801683-cbffb703-5818-4ddf-a675-8c32909875fb.jpg";
const image = new Image();
image.src = url;

// humble baron bar
const url2 =
  "https://user-images.githubusercontent.com/40181569/279208483-33e9e79d-311b-431a-87f7-d92e6152c496.jpg";
const image2 = new Image();
image2.src = url2;

// tolley house
const url3 =
  "https://user-images.githubusercontent.com/40181569/279143157-08299ac9-0aa1-4da0-88b1-fc03215822b9.jpeg";
const image3 = new Image();
image3.src = url3;

const url4 =
  "https://user-images.githubusercontent.com/40181569/280026061-90e302cd-cb49-4d4b-b8c0-c014fc7762c1.png";
const image4 = new Image();
image4.src = url4;

const corsImage = new Image();
corsImage.crossOrigin = "Anonymous";
corsImage.src = url + "?not=from-cache-please";

import "../About/About.css";
import Gallery2 from "../Gallery2/Gallery2";

import HumbleBaron from "../HumbleBaron/HumbleBaron";
import TolleyHouse from "../TolleyHouse/TolleyHouse";

const Hospitality = () => {
  return (
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-content flex__center">
        <div className="2xl:mt-[-200px] app__aboutus-content_about">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <motion.div
              variants={fadeIn("right", "tween", 0.3, 1)}
              className="xl:mt-[-20px]"
            >
              <h1 className="headtext__cormorant">Hospitality</h1>
            </motion.div>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <motion.div
              variants={fadeIn("right", "tween", 0.3, 1)}
              className="app__aboutus-content_about about"
            >
              <p
                className="p__raleway flex-wrap 2xl:text-lg"
                style={{ margin: "2rem 0", marginLeft: "-30px" }}
              >
                Esse incididunt exercitation fugiat ullamco sunt aute ut tempor
                enim aliquip enim id. Reprehenderit voluptate cillum consequat
                ex ut ex quis consectetur excepteur tempor deserunt labore. Ut
                quis dolor occaecat deserunt pariatur cupidatat sunt
                exercitation pariatur commodo. Ut excepteur excepteur Lorem enim
                anim aliqua ex nostrud et ipsum consequat minim adipisicing.
                Esse ullamco aute velit aliquip in in voluptate minim in mollit.
              </p>
            </motion.div>
          </motion.div>
          <HumbleBaron />
          <TolleyHouse />
        </div>
        {/* <div className=" z-100 2xl:ml-[300px] 2xl:mt-[-350px]">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <motion.div
              variants={fadeIn("left", "tween", 0.3, 1)}
              className="app__aboutus-content_history 2xl:w-[60%] humble-baron-logo"
            >
              <img
                alt="humble-baron-logo"
                src={url}
                className="2xl:w-[35%] 2xl:h-[30%] xl:ml-[930px] xl:mt-[-250px]"
              />
            </motion.div>
          </motion.div>
        </div> */}
      </div>
    </div>
  );
};

export default Hospitality;
