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
import Account from "./components/Account/Account";
import Search from "./components/Search/Search";
import Privacy from "./components/Privacy/Privacy";
import Tnc from "./components/TNC/TNC";
import { createContext, useState } from "react";
import { getCheckoutList, setCheckoutList } from "./CheckoutList";
import NotFound from "./components/NotFound/NotFound";

export const UserContext = createContext();

function App() {
  const [cartCount, setCartCount] = useState(() =>
    getCheckoutList().reduce((total, item) => total + item.quantity, 0)
  );
  const [cartList, setCartList] = useState(getCheckoutList());

  return (
    <Router>
      <UserContext.Provider
        value={{ cartCount, setCartCount, cartList, setCartList }}
      >
        <Navigation />
        <div className="content">
          <Routes>
            <Route
              exact
              path="/Furniture-Ecommerce-Website/"
              element={<Homepage />}
            />
            <Route
              path="/Furniture-Ecommerce-Website/shop"
              element={<Shop />}
            />
            <Route
              path="/Furniture-Ecommerce-Website/about"
              element={<AboutUs />}
            />
            <Route
              path="/Furniture-Ecommerce-Website/contact"
              element={<ContactUs />}
            />
            <Route
              path="/Furniture-Ecommerce-Website/wishlist"
              element={<Wishlist />}
            />
            <Route
              path="/Furniture-Ecommerce-Website/cart"
              element={<Cart />}
            />
            <Route
              path="/Furniture-Ecommerce-Website/checkout"
              element={<Checkout />}
            />
            <Route
              path="/Furniture-Ecommerce-Website/account"
              element={<Account />}
            />
            <Route
              path="/Furniture-Ecommerce-Website/search"
              element={<Search />}
            />
            <Route
              path="/Furniture-Ecommerce-Website/privacy"
              element={<Privacy />}
            />
            <Route path="/Furniture-Ecommerce-Website/tnc" element={<Tnc />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
