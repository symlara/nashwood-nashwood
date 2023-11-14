import React from "react";
// import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaArrowUp } from "react-icons/fa";

import nashwoodwatermark from "../../assets/nashwood-nw-wordmark-logo-white-rgb-640px-w-72ppi.png";

import FooterOverlay from "../../components/FooterOverlay/FooterOverlay";

import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding xl:mt-[150px]" id="contact-us">
    <FooterOverlay />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        {/* Will link off to a CRM tool */}
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__raleway">
          323 Depot St., Shelbyville, Tennessee 37160
        </p>
        <p className="p__raleway">931-325-6279</p>
        {/* <p className="p__raleway">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__raleway">+1 212-344-1230</p>
        <p className="p__raleway">+1 212-555-1230</p> */}
      </div>
      <div className="app__footer-links_logo">
        <img src={nashwoodwatermark} alt="footer_logo" />
        {/* <p className="p__raleway">
          "The best way to find yourself is to lose yourself in the service of
          others.”
        </p> */}
      </div>
      <div className="app__footer-links_icons mt-5">
        {/* <FiFacebook />
        <FiTwitter /> */}
        <AiOutlineInstagram />
      </div>
      {/* <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__raleway">Monday-Friday:</p>
        <p className="p__raleway">08:00 am -12:00 am</p>
        <p className="p__raleway">Saturday-Sunday:</p>
        <p className="p__raleway">07:00am -11:00 pm</p>
      </div> */}
    </div>
    <div>
      <button
        type="button"
        className=" bg-black rounded-xl px-5 text-white cursor-pointer xl:ml-[1000px] xl:mt-[-800px] relative"
      >
        <a href="#top">
          {/* <FaArrowUp />{" "} */}
          Back to Top
        </a>
      </button>
    </div>
    <div className="footer__copyright">
      <p className="p__raleway">2023 Nashwood Inc. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
