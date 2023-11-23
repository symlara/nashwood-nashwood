const url =
  "https://user-images.githubusercontent.com/40181569/277809425-75a953e0-01fd-413f-b4c3-d47a1d21c1a8.png";
const image = new Image();
image.src = url;

const url2 =
  "https://user-images.githubusercontent.com/40181569/277808266-95f14a68-7d4b-458b-ab26-8a0e68fb32de.jpg";
const image2 = new Image();
image2.src = url2;

const corsImage = new Image();
corsImage.crossOrigin = "Anonymous";
corsImage.src = url + "?not=from-cache-please";
import LazyLoad from "react-lazy-load";

import "../About/About.css";
import { motion } from "framer-motion";
import {
  slideIn,
  staggerContainer,
  textVariant,
  fadeIn,
} from "../../../utils/motion";

const About = () => {
  return (
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-content flex__center">
        <div className=" 2xl:mt-[-200px] xl:mt-[70px] app__aboutus-content_about">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className=""
          >
            <motion.div
              variants={fadeIn("right", "tween", 0.3, 1)}
              className=""
            >
              <h1 className="headtext__cormorant">About Us</h1>
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
                Keith Weaver is the founder and CEO of Nashwood, Inc., which is
                a leading real estate, entertainment, and hospitality company.
                Keith is experienced in developing business concepts into highly
                successful commercial enterprises. He is an accomplished
                entrepreneur and corporate executive with over 25 years of
                experience establishing and leading notable companies in the
                spirits, real estate, hospitality, and entertainment sectors.
                Keith also co-founded Uncle Nearest Premium Whiskey in 2016,
                which is the fastest-growing American whiskey or bourbon in U.S.
                history.
              </p>
            </motion.div>
          </motion.div>
        </div>
        <div className="keith">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <motion.div
              variants={fadeIn("left", "tween", 0.3, 1)}
              className="app__aboutus-content_history xl:w-[80%] "
            >
              <LazyLoad>
                <img
                  alt="keithweaver"
                  src={url2}
                  className="xl:ml-[300px] rounded-xl"
                />
              </LazyLoad>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
