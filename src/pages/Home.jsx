import React from "react";
import Navbar from "../components/Navbar/Navbar";
import SubHeading from "../components/SubHeading";

import {
  slideIn,
  staggerContainer,
  textVariant,
  fadeIn,
} from "../../utils/motion";
import { motion } from "framer-motion";

import Gallery2 from "../container/Gallery2/Gallery2";
import Header from "../container/Header/Header";

const Home = () => {
  return (
    <div>
      <div className="z-[30] w-full">
        {/* <Navbar /> */}

        <Gallery2 />
        <div className="app__wrapper_info 2xl:ml-[50px] whitespace-normal 2xl:mt-[150px] xl:ml-[20px] xl:mt-[100px]">
          <div className="subtitle">
            <SubHeading title="Nashwood, Inc." />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <motion.div variants={fadeIn("right", "tween", 0.3, 1)}>
              <p
                className="p__raleway 2xl:text-lg whitespace-normal nashwood-inc"
                style={{ margin: "2rem 0" }}
              >
                Nashwood, Inc. is a real estate, hospitality, and entertainment
                company headquartered in Bedford County Tennessee. Nashwood’s
                span of work includes ownership and operation of a diverse real
                estate portfolio, management of enterprises in the food and
                beverage sector, and a wide range of entertainment interests –
                ranging from content production, artist development, and
                physical production services.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Header />
    </div>
  );
};

export default Home;
