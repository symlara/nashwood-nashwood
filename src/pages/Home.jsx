import React from "react";
import { Tilt } from "react-tilt";
import Navbar from "../components/Navbar/Navbar";
import SubHeading from "../components/SubHeading";

//old fashioned image
const url =
  "https://user-images.githubusercontent.com/40181569/277797876-79277a2e-123d-4588-9478-ab7b5bc90e39.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDExMjc5MTQsIm5iZiI6MTcwMTEyNzYxNCwicGF0aCI6Ii80MDE4MTU2OS8yNzc3OTc4NzYtNzkyNzdhMmUtMTIzZC00NTg4LTk0NzgtYWI3YjViYzkwZTM5LmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMxMTI3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMTEyN1QyMzI2NTRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mNjZlZjIzYjI5YWMzNTQxYzAzMTdlZTAzYTg0N2FlOTNhN2RhOWFiYzcyY2ZlNjg3M2MyN2NhYzQ4MDFlZjYxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.lDN0X9r07FgStpRvLQewMijpunvZ2mg-a6f1RN9gT04";
const image = new Image();
image.src = url;

const url2 =
  "https://user-images.githubusercontent.com/40181569/277821037-940ea1c1-86dd-4ca8-8527-423c997aebdb.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDExMjc5MTQsIm5iZiI6MTcwMTEyNzYxNCwicGF0aCI6Ii80MDE4MTU2OS8yNzc4MjEwMzctOTQwZWExYzEtODZkZC00Y2E4LTg1MjctNDIzYzk5N2FlYmRiLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzExMjclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMTI3VDIzMjY1NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNjZWVhMmRmNWU3MDQ3ZmVjYWE0ZDJkZWVhNDNmYWU2YmFmM2FmYWNjNWZkMTE5MTdhZjdjNjJlNzYwZGM3ZDQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.4cflPHO9wcierSk_75xn7V9R3KC-SkVJ2VJpndoruNc";
const image2 = new Image();
image2.src = url2;

// entertainment image
const url3 =
  "https://user-images.githubusercontent.com/40181569/286414044-c1f22b7b-f96e-4273-b999-b3aebf0ba22a.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDEyMDk3OTYsIm5iZiI6MTcwMTIwOTQ5NiwicGF0aCI6Ii80MDE4MTU2OS8yODY0MTQwNDQtYzFmMjJiN2ItZjk2ZS00MjczLWI5OTktYjNhZWJmMGJhMjJhLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzExMjglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMTI4VDIyMTEzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTM1ZDMwZWFlMTkzMGFjYTM5MjA1YmUzMThiNjM1ZmEwNzBhYjU3OGVlMzUwZGE4NDhjYzBiZjdmMzMxM2I3ZjImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.mgp7a30GS1jGE6RFmn3qMTimcDblTl2H_5iwIz6Mguc";
const image3 = new Image();
image3.src = url3;

// tolley house
const url4 =
  "https://user-images.githubusercontent.com/40181569/285060182-0210e7fb-b039-4461-8b9e-4ffcd7496335.jpg";
const image4 = new Image();
image4.src = url4;

// production image
const url5 =
  "https://user-images.githubusercontent.com/40181569/286401771-69884b51-a587-4023-8b5d-a30728b88b34.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDEyMDYyOTIsIm5iZiI6MTcwMTIwNTk5MiwicGF0aCI6Ii80MDE4MTU2OS8yODY0MDE3NzEtNjk4ODRiNTEtYTU4Ny00MDIzLThiNWQtYTMwNzI4Yjg4YjM0LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzExMjglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMTI4VDIxMTMxMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTc3ZmI1YTNlYjMwMjM0NDRjMWM3M2EwNWI3MzE0NTY3Yzc1M2Y5ZjNlZDNlNjllNzdhYjhmYzcwYmFiMjMwOTcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.VYLBXTNeZefwjiBszt22p8qPqwb1qlqcAWcYe-iy0Gk";
const image5 = new Image();
image5.src = url5;

const corsImage = new Image();
corsImage.crossOrigin = "Anonymous";
corsImage.src = url + "?not=from-cache-please";

import {
  slideIn,
  staggerContainer,
  textVariant,
  fadeIn,
} from "../../utils/motion";
import { motion } from "framer-motion";

import Gallery2 from "../container/Gallery2/Gallery2";
import Header from "../container/Header/Header";

const Home = ({ index }) => {
  return (
    <div>
      <div className="z-[30] w-full">
        {/* <Navbar /> */}

        <Gallery2 />
        <div className="app__wrapper_info whitespace-normal md:mt-[60px] xl:ml-[150px] xl:mt-[100px]">
          <div className="subtitle 2xl:mt-[200px] 2xl:ml-[-80px]">
            <SubHeading title="Nashwood, Inc." />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="2xl:ml-[-80px]"
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

      {/* gallery section on bottom of homepage */}
      <div className=" bg-[#000] justify-center items-center md:w-[100%] md:mt-[-600px] pb-5 xl:w-full xl:mt-[-550px] pt-[30px] pr-0 xl:block home-imgs">
        <div className="flex">
          <Tilt className="w-full ">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >
              <motion.div
                className="w-full p-[1px] rounded-[20px] md:ml-[-60px] xl:ml-[-60px]"
                variants={fadeIn("top", "tween", 0.3, 2)}
              >
                <div
                  options={{ max: 35, scale: 1, speed: 450 }}
                  className="rounded-[20px] min-h-[280px] flex items-center flex-col"
                >
                  <img
                    src={url3}
                    className="xl:w-[70%] object-contain entertainment-gallery"
                    alt="entertainment-gallery"
                  />
                </div>
              </motion.div>
            </motion.div>
          </Tilt>
          <Tilt>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >
              <motion.div
                className="w-full p-[1px] rounded-[20px] md:ml-[-90px] xl:ml-[-150px]"
                variants={fadeIn("top", "tween", 0.5, 2)}
              >
                <div
                  options={{ max: 35, scale: 1, speed: 450 }}
                  className="rounded-[20px] min-h-[280px] flex items-center flex-col"
                >
                  <img
                    src={url5}
                    className="xl:w-[77%] justify-center items-center m-0 object-contain production-gallery"
                    alt="production-gallery"
                  />
                </div>
              </motion.div>
            </motion.div>
          </Tilt>

          <Tilt>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
            >
              <motion.div
                className="w-full p-[1px] rounded-[20px] md:ml-[-5px] xl:ml-[-100px]"
                variants={fadeIn("top", "tween", 0.7, 2)}
              >
                <div
                  options={{ max: 35, scale: 1, speed: 450 }}
                  className="rounded-[20px] min-h-[280px] flex items-center flex-col"
                >
                  <img
                    src={url4}
                    className="xl:w-[380px] 2xl:w-[87%] object-contain tolley-gallery"
                    alt="tolley-house-gallery"
                  />
                </div>
              </motion.div>
            </motion.div>
          </Tilt>

          {/* <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <motion.div
              variants={fadeIn("top", "tween", 0.3, 2)}
              className="block relative old-fashioned-img"
            >
              <img
                src={url}
                className="flex m-0 xl:w-[80%] xl:h-auto"
                alt="old-fashioned"
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <motion.div
              variants={fadeIn("bottom", "tween", 0.5, 2)}
              className="flex relative salmon-img"
            >
              <img
                src={url2}
                className="xl:w-[80%] xl:h-auto"
                alt="wild-caught-salmon"
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <motion.div
              variants={fadeIn("bottom", "tween", 0.7, 2)}
              className="flex relative"
            >
              <img
                src={url3}
                className="xl:w-[80%] xl:h-auto"
                alt="saute-snow-crab-claw"
              />
            </motion.div>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
