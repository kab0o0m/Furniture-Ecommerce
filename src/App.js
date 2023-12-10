import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Nav";
import Homepage from "./components/Homepage/Homepage";
import Shop from "./components/Shop/Shop";
import AboutUs from "./components/About Us/AboutUs";
import ContactUs from "./components/Contact Us/ContactUs";
import Footer from "./components/Footer/Footer";
import Wishlist from "./components/Wishlist/Wishlist";
import Checkout from "./components/Checkout/Checkout";
import Cart from "./components/Cart/Cart";
import { createContext, useState } from "react";
import { getCheckoutList, setCheckoutList } from "./CheckoutList";

export const UserContext = createContext();

function App() {
  const [cartCount, setCartCount] = useState(() =>
    getCheckoutList().reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <Router>
      <UserContext.Provider value={{ cartCount, setCartCount }}>
        <Navigation />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
