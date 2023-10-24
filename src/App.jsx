import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./container/Header/Header";
import AboutUs from "./container/AboutUs/AboutUs";
import Entertainment from "./container/Entertainment/Entertainment";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <Entertainment />
    </div>
  );
}

export default App;
