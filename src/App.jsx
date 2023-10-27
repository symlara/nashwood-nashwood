import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./container/Header/Header";
import AboutUs from "./container/AboutUs/AboutUs";
import Entertainment from "./container/Entertainment/Entertainment";
import Hospitality from "./container/Hospitality/Hospitality";
import HumbleBaron from "./container/HumbleBaron/HumbleBaron";
import TolleyHouse from "./container/TolleyHouse/TolleyHouse";
import RealEstate from "./container/RealEstate/RealEstate";
import Gallery from "./container/Gallery/Gallery";
import FindUs from "./container/FindUs/FindUs";
import Footer from "./container/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <Entertainment />
      <Hospitality />
      {/* <HumbleBaron />
      <TolleyHouse /> */}
      <RealEstate />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;
