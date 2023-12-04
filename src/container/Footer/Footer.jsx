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
        <h1 className="app__footer-headtext xl:ml-[100px]">Contact Us</h1>
        <p className="p__raleway xl:ml-[100px]">
          323 Depot St., Shelbyville, Tennessee 37160
        </p>
        <div className="shelbyville">
          <p className="p__raleway xl:ml-[100px] xl:p-[5px]">931-325-6279</p>
        </div>
        {/* <p className="p__raleway">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__raleway">+1 212-344-1230</p>
        <p className="p__raleway">+1 212-555-1230</p> */}
      </div>
      <div className="app__footer-links_logo max-w-5xl md:ml-[800px]">
        <img
          src={nashwoodwatermark}
          alt="footer_logo"
          className="xl:ml-[-520px]"
        />
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

    <div className="footer__copyright 2xl:mt-[-250px] ">
      <div className="xl:mt-[-950px]">
        <button
          type="button"
          className="bg-[#1a3a61] rounded-xl px-5 text-white cursor-pointer xl:ml-[1000px] relative"
        >
          <a href="#top">
            {/* <FaArrowUp />{" "} */}
            Back to Top
          </a>
        </button>
      </div>

      <p className="p__raleway xl:mt-[600px] xl:ml-[360px] md:ml-[-25px]">
        © 2023 Nashwood Inc. All Rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;
