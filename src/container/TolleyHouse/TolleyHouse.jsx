import React from "react";
import { motion } from "framer-motion";
import {
  slideIn,
  staggerContainer,
  textVariant,
  fadeIn,
} from "../../../utils/motion";

const tolleyhouse =
  "https://user-images.githubusercontent.com/40181569/282899378-64dfb3cb-b13b-45ba-86f5-c0e6caad20b5.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDEyMDc1ODYsIm5iZiI6MTcwMTIwNzI4NiwicGF0aCI6Ii80MDE4MTU2OS8yODI4OTkzNzgtNjRkZmIzY2ItYjEzYi00NWJhLTg2ZjUtYzBlNmNhYWQyMGI1LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzExMjglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMTI4VDIxMzQ0NlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTVlOGIwMzNhYTE0MjMyOGQwZjhkMzkwYzgwZWExN2IxMmIwMDkzZTFmMDk5YTU5NWE0NzYzMjZlNjM3OTI0MjkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.J-IEKDVmxjJMhhWb2yDP6H7eBa1hhC_jCFMezzfrHfM";
const image = new Image();
image.src = tolleyhouse;

const corsImage = new Image();
corsImage.crossOrigin = "Anonymous";
corsImage.src = tolleyhouse + "?not=from-cache-please";
import "../About/About.css";

const TolleyHouse = () => {
  return (
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-content flex__center">
        <div className=" 2xl:mt-[-200px] app__aboutus-content_about">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <motion.div
              variants={fadeIn("right", "tween", 0.3, 1)}
              className="tolley-house"
            >
              <h1 className="headtext__cormorant whitespace-nowrap">
                Tolley House
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
              className="app__aboutus-content_about tolley-house-p"
            >
              <p
                className="p__raleway flex-wrap 2xl:text-lg whitespace-pre-wrap"
                style={{ margin: "-1rem 0", marginLeft: "-30px" }}
              >
                The Tolley House is the most storied Bed & Breakfast in
                Lynchburg, Tennessee. One of historic Lynchburg’s oldest
                antebellum homes, Tolley House, a boutique inn, was once owned
                by Lem Motlow and Lem Tolley, the former master distiller for
                Jack Daniel’s Distillery. The Tolley House is just a mile from
                Lynchburg’s town square, where you can visit shops and take in
                the beauty of the historic town.
              </p>
            </motion.div>
          </motion.div>
        </div>
        <div className=" z-100 2xl:ml-[300px] 2xl:mt-[-350px]">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <motion.div
              variants={fadeIn("left", "tween", 0.3, 1)}
              className="app__aboutus-content_history 2xl:w-[60%] tolley-house-img xl:w-[80%]"
            >
              <img
                alt="humble-baron-logo"
                src={tolleyhouse}
                className=" rounded-xl 2xl:h-[30%] xl:ml-[930px] xl:mt-[-250px]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TolleyHouse;
