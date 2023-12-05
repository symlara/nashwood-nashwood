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

const HumbleBaron = () => {
  return (
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-content flex__center">
        <div className=" 2xl:mt-[-200px]  app__aboutus-content_about">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <motion.div
              variants={fadeIn("right", "tween", 0.3, 1)}
              className="hb-bar"
            >
              <h1 className="headtext__cormorant whitespace-nowrap">
                Humble Baron
              </h1>
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
                className="p__raleway flex-wrap 2xl:text-lg whitespace-pre-wrap"
                style={{ margin: "1rem 0", marginLeft: "-30px" }}
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
        <div className="z-100 2xl:ml-[300px] 2xl:mt-[-350px]">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <motion.div
              variants={fadeIn("left", "tween", 0.3, 1)}
              className="app__aboutus-content_history  2xl:w-[60%] humble-baron-logo"
            >
              <img
                alt="humble-baron-logo"
                src={url}
                className="2xl:w-[35%] 2xl:h-[30%] xl:ml-[930px] xl:mt-[-250px]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HumbleBaron;
