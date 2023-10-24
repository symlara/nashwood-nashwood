import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./container/Header/Header";
import AboutUs from "./container/AboutUs/AboutUs";
import Entertainment from "./container/Entertainment/Entertainment";
import Hospitality from "./container/Hospitality/Hospitality";
import HumbleBaron from "./container/HumbleBaron/HumbleBaron";
import TolleyHouse from "./container/TolleyHouse/TolleyHouse";
import RealEstate from "./container/RealEstate/RealEstate";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <Entertainment />
      <Hospitality />
      <HumbleBaron />
      <TolleyHouse />
      <RealEstate />
    </div>
  );
}

export default App;
