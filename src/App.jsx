import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Gallery,
  Header,
  // AboutUs,
  Entertainment,
  Hospitality,
  RealEstate,
  // FindUs,
  Footer,
} from "./container";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./pages/AboutUs/AboutUs";
import Home from "./pages/Home";

// import Navbar from "./components/Navbar/Navbar";
// import Header from "./container/Header/Header";
// import AboutUs from "./container/AboutUs/AboutUs";
// import Entertainment from "./container/Entertainment/Entertainment";
// import Hospitality from "./container/Hospitality/Hospitality";
// import HumbleBaron from "./container/HumbleBaron/HumbleBaron";
// import TolleyHouse from "./container/TolleyHouse/TolleyHouse";
// import RealEstate from "./container/RealEstate/RealEstate";
// import Gallery from "./container/Gallery/Gallery";
// import FindUs from "./container/FindUs/FindUs";
// import Footer from "./container/Footer/Footer";

function App() {
  return (
    <div className="bg-[#1a3a61]">
      <Navbar />
      {/* <Home /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/hospitality" element={<Hospitality />} />
        <Route path="/real-estate" element={<RealEstate />} />
      </Routes>

      {/* <Gallery /> */}

      <Footer />
    </div>
  );
}

export default App;
