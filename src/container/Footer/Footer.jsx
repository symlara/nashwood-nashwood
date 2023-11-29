import React from "react";
// import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaArrowUp } from "react-icons/fa";

import nashwoodwatermark from "../../assets/nashwood-nw-wordmark-logo-white-rgb-640px-w-72ppi.png";

import FooterOverlay from "../../components/FooterOverlay/FooterOverlay";

import "./Footer.css";

const Footer = () => (
  <div
    className="app__footer section__padding 2xl:mt-[200px] xl:mt-[150px]"
    id="contact-us"
  >
    <FooterOverlay />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        {/* Will link off to a CRM tool */}
        <h1 className="app__footer-headtext max-w-5xl">Contact Us</h1>
        <p className="p__raleway max-w-5xl">
          323 Depot St., Shelbyville, Tennessee 37160
        </p>
        <div className="shelbyville">
          <p className="p__raleway max-w-5xl">931-325-6279</p>
        </div>
        {/* <p className="p__raleway">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__raleway">+1 212-344-1230</p>
        <p className="p__raleway">+1 212-555-1230</p> */}
      </div>
      <div className="app__footer-links_logo max-w-5xl">
        <img src={nashwoodwatermark} alt="footer_logo" />
        {/* <p className="p__raleway">
          "The best way to find yourself is to lose yourself in the service of
          others.”
        </p> */}
      </div>
      <div className="app__footer-links_icons mt-5 max-w-5xl">
        {/* <FiFacebook />
        <FiTwitter /> */}
        <AiOutlineInstagram />
      </div>
    </div>

    <div className="footer__copyright 2xl:mt-[-250px] md:mt-[-450px]">
      <button
        type="button"
        className=" bg-[#1a3a61] rounded-xl px-5 text-white cursor-pointer md:ml-[140px] xl:ml-[1000px] xl:mt-[-800px] relative"
      >
        <a href="#top">
          {/* <FaArrowUp />{" "} */}
          Back to Top
        </a>
      </button>
      <p className="p__raleway md:ml-[60px]">
        2023 Nashwood Inc. All Rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;
