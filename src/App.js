import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Nav";
import Homepage from "./components/Homepage/Homepage";
import Shop from "./components/Shop/Shop";
import Blog from "./components/Blog/Blog";
import AboutUs from "./components/About Us/AboutUs";
import ContactUs from "./components/Contact Us/ContactUs";
import Footer from "./components/Footer/Footer";
import Wishlist from "./components/Wishlist/Wishlist";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
      </div>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
