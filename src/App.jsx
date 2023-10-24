import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./container/Header/Header";
import AboutUs from "./container/AboutUs/AboutUs";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
    </div>
  );
}

export default App;
