import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

// import images from "../../constants/images";
import nashwoodwatermark from "../../assets/nashwood-nw-wordmark-logo-white-rgb-640px-w-72ppi.png";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="/">
          <img src={nashwoodwatermark} alt="app logo" />
        </a>
      </div>
      <ul className="app__navbar-links">
        <li className="p__raleway">
          <Link to="/about-us">About Us</Link>
        </li>
        <li className="p__raleway">
          <Link to="/entertainment">Entertainment</Link>
        </li>
        <li className="p__raleway">
          <Link to="/hospitality">Hospitality</Link>
        </li>
        {/* <li className="p__raleway">
          <a href="#humble-baron">Humble Baron</a>
        </li>
        <li className="p__raleway">
          <a href="#tolley-house">The Tolley House</a>
        </li> */}
        <li className="p__raleway">
          <Link to="/real-estate">RealEstate</Link>
        </li>
        <li className="p__raleway">
          <a href="#contact-us" id="#contact-us">
            Contact Us
          </a>
        </li>
      </ul>
      <div className="app__navbar-login">
        {/* <a href="#login" className="p__raleway">
          Log In / Register
        </a>
        <div />
        <a href="/" className="p__raleway">
          Book Table
        </a> */}
      </div>

      {/* smallscreen */}
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <AiOutlineClose
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__raleway">
                <Link to="/about-us">About Us</Link>
              </li>
              <li className="p__opensans">
                <a href="#entertainment">Entertainment</a>
              </li>
              <li className="p__opensans">
                <a href="#hospitality">Hospitality </a>
              </li>
              <li className="p__opensans">
                <a href="#humble-baron">Humble Baron</a>
              </li>
              <li className="p__opensans">
                <a href="#tolley-house">The Tolley House</a>
              </li>
              <li className="p__opensans">
                <a href="#real-estate" id="#real-estate">
                  Real Estate
                </a>{" "}
              </li>
              <li className="p__raleway">
                <a href="#contact-us" id="#contact-us">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
