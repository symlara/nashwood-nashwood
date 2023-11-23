import React from "react";
// import nashwoodlogo from "../../assets/nashwood-nw-icon-logo-wise-gray-rgb-640px-w-72ppi.png";
// import keithweaver from "../../assets/KeithWeaver.jpg";

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

import "../AboutUs/AboutUs.css";
import LazyLoad from "react-lazy-load";

import {
  slideIn,
  staggerContainer,
  textVariant,
  fadeIn,
} from "../../../utils/motion";
import { motion } from "framer-motion";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  ></div>
);

export default AboutUs;
