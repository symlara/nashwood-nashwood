import React from "react";

import { motion } from "framer-motion";
import {
  slideIn,
  staggerContainer,
  textVariant,
  fadeIn,
} from "../../../utils/motion";

import "../About/About.css";

const entertainment =
  "https://user-images.githubusercontent.com/40181569/280852826-8d617545-ea11-46a8-8afe-44f5315b2b15.JPG";
const image = new Image();
image.src = entertainment;

const Entertainment = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="entertainment"
  >
    {/* <div className="app__aboutus-overlay flex__center">
      <img src={images.entertainment} alt="entertainment logo" />
    </div> */}
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about 2xl:mt-[-200px] xl:mt-[30px]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="entertainment"
        >
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className="">
            <h1 className="headtext__cormorant">Entertainment</h1>
          </motion.div>
        </motion.div>

        {/* <img src={images.spoon} alt="about_spoon" className="spoon__img" /> */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="entertainment-p"
        >
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className="">
            <p
              className="p__raleway flex-wrap 2xl:text-lg "
              style={{ margin: "2rem 0", marginLeft: "-30px" }}
            >
              With leadership representing more than 60 years combined in key
              roles in the entertainment industry, Nashwood, Inc. is uniquely
              positioned to develop recording artists, audiovisual content, as
              well as serve as a production partner for entertainment and
              corporate events.
            </p>
          </motion.div>
        </motion.div>

        {/* <button type="button" className="custom__button">
          Know More
        </button> */}
      </div>

      <div className="app__aboutus-content_history 2xl:mt-[100px] entertainment-img">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className=""
        >
          <motion.div variants={fadeIn("left", "tween", 0.3, 1)}>
            <img src={entertainment} alt="singer" className="md:ml-[100px]" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  </div>
);

export default Entertainment;
