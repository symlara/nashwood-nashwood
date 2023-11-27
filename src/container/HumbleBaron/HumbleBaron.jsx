import React from "react";
import { motion } from "framer-motion";
import {
  slideIn,
  staggerContainer,
  textVariant,
  fadeIn,
} from "../../../utils/motion";

// hospitality logo
const url =
  "https://user-images.githubusercontent.com/40181569/280026061-90e302cd-cb49-4d4b-b8c0-c014fc7762c1.png";
const image = new Image();
image.src = url;

const corsImage = new Image();
corsImage.crossOrigin = "Anonymous";
corsImage.src = url + "?not=from-cache-please";
import "../About/About.css";

const HumbleBaron = () => (
  <div className="mt-10" id="humble-baron">
    {/* <div className="app__aboutus-overlay flex__center">
      <img src={images.entertainment} alt="entertainment logo" />
    </div> */}
    <div className="">
      <div className="app__aboutus-content_about">
        {/* <img src={images.spoon} alt="about_spoon" className="spoon__img" /> */}
        <div className="longest-bar">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <motion.div variants={fadeIn("right", "tween", 0.3, 1)}>
              <h1 className="headtext__cormorant hb xl:ml-[269px]">
                Humble Baron
              </h1>

              <p
                className="p__raleway flex-wrap 2xl:text-lg"
                style={{ margin: "2rem 0  ", marginLeft: "-30px" }}
              >
                Humble Baron is Middle Tennessee’s newest restaurant, bar and
                entertainment venue, located on the property of the iconic
                Nearest Green Distillery in Shelbyville, Tennessee. Home to the
                World’s Longest Bar at 518-feet-long, Humble Baron is brought to
                life by co-founder of Uncle Nearest Premium Whiskey, Keith
                Weaver. A destination for locals and visitors alike, the venue
                offers elevated Southern fare alongside craft whiskey cocktails
                and will showcase live music several nights a week. Humble Baron
                is a gathering place where everyone has a seat at the table,
                bringing people together over premium spirits, exceptional food
                and lively music.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* <button type="button" className="custom__button">
          Know More
        </button> */}
      </div>

      <div className="humble-baron-logo z-100 2xl:ml-[300px] 2xl:mt-[-350px]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.div variants={fadeIn("left", "tween", 0.3, 1)}>
            <img
              src={url}
              alt="humble-baron-logo"
              className="xl:w-[30%] xl:h-[30%] 2xl:w-[35%] 2xl:h-[30%] xl:ml-[930px] xl:mt-[-250px]"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  </div>
);

export default HumbleBaron;
