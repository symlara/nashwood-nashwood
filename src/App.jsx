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
    <div>
      {/* <Navbar /> */}
      {/* <Home /> */}
      <div className="z-[30] w-full bg-[#1a3a61]">
        <Navbar />
        <div className="app__wrapper_info 2xl:ml-[50px] 2xl:mt-[200px] whitespace-normal">
          <p
            className="p__raleway 2xl:text-lg whitespace-normal bg-[#1a3a61]"
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

        <Header />
      </div>

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
