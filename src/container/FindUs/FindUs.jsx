import React from "react";

const url =
  "https://user-images.githubusercontent.com/40181569/277822274-961e98f0-ed0b-47fe-ab51-28f95baf9650.JPG";
const image = new Image();
image.src = url;

const corsImage = new Image();
corsImage.crossOrigin = "Anonymous";
corsImage.src = url + "?not=from-cache-please";

const FindUs = () => (
  <div
    className="app__bg app__wrapper section__padding find-us"
    id="contact-us"
  >
    <div className="app__wrapper_info">
      {/* <SubHeading title="Contact" /> */}
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>
      {/* <div className="app__wrapper-content">
        <p className="raleway" style={{ color: "#DCCA87", margin: "2rem 0" }}>
          Opening Hours{" "}
        </p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div> */}
      <button className="custom__button" style={{ marginTop: "2rem" }}>
        Visit Us
      </button>
    </div>

    <div className="app__wrapper_img glenford">
      <img src={url} alt="findus" />
    </div>
  </div>
);

export default FindUs;
