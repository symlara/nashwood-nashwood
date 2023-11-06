import React from "react";
import Navbar from "../components/Navbar/Navbar";
import SubHeading from "../components/SubHeading";

import Gallery2 from "../container/Gallery2/Gallery2";

const Home = () => {
  return (
    <div>
      <div className="z-[30] w-full">
        {/* <Navbar /> */}

        <Gallery2 />
        <div className="app__wrapper_info 2xl:ml-[50px] whitespace-normal 2xl:mt-[150px] xl:ml-[20px] xl:mt-[100px]">
          <SubHeading title="Nashwood, Inc." />
          <p
            className="p__raleway 2xl:text-lg whitespace-normal"
            style={{ margin: "2rem 0" }}
          >
            Nashwood, Inc. is a real estate, hospitality, and entertainment
            company headquartered in Bedford County Tennessee. Nashwood’s span
            of work includes ownership and operation of a diverse real estate
            portfolio, management of enterprises in the food and beverage
            sector, and a wide range of entertainment interests – ranging from
            content production, artist development, and physical production
            services.
          </p>
        </div>
      </div>
      {/* <Header /> */}
    </div>
  );
};

export default Home;
