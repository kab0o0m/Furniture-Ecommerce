import "./Nav.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState, useContext } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { getCheckoutList, setCheckoutList } from "../../CheckoutList";
import { UserContext } from "../../App";

function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount, setCartCount, cartList, setCartList } =
    useContext(UserContext);
  const [isSettingsClick, setIsSettingsClick] = useState(false);
  const [isCartClick, setIsCartClick] = useState(false);

  const updateQuantity = (itemId, newQuantity) => {
    let updatedCartList = cartList.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );

    // Remove item from the cartList if the new quantity is 0
    updatedCartList = updatedCartList.filter((item) => item.quantity > 0);

    setCartList(updatedCartList);
    setCheckoutList(updatedCartList);
    setCartCount(
      updatedCartList.reduce((total, item) => total + item.quantity, 0)
    );
  };

  const handleDecreaseQuantity = (itemId) => {
    const item = cartList.find((item) => item.id === itemId);
    if (item && item.quantity > 1) {
      updateQuantity(itemId, item.quantity - 1);
    } else {
      // If the quantity is already 1, remove the item
      updateQuantity(itemId, 0);
    }
  };

  const handleIncreaseQuantity = (itemId) => {
    const item = cartList.find((item) => item.id === itemId);
    if (item) {
      updateQuantity(itemId, item.quantity + 1);
    }
  };

  useEffect(() => {
    setCartCount(
      getCheckoutList().reduce((total, item) => total + item.quantity, 0)
    );
    setCartList(getCheckoutList());
  }, [cartList]);

  const windowScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const settingsDropdown = () => {
    setIsSettingsClick(!isSettingsClick);
    setIsCartClick(false);
  };

  const cartDropdown = () => {
    setIsCartClick(!isCartClick);
    setIsSettingsClick(false);
  };
  useEffect(() => {
    // Set isSettingsClick to false when location changes
    setIsSettingsClick(false);
    setIsCartClick(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const cart = () => {
    navigate("/cart");
    windowScrollToTop();
  };

  return (
    <nav>
      <Link to="/" className="site-title">
        Furvo
      </Link>
      <ul
        id="subnavbar"
        className={`${isOpen ? "#subnavbar active" : "#subnavbar"}`}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/wishlist">Wishlist</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      <div className="menu-right">
        <button className="search-icon">
          <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
        </button>
        <button className="settings-icon" onClick={() => settingsDropdown()}>
          <i className="fa-solid fa-gear"></i>
        </button>
        <div
          className={`settings-popup ${
            isSettingsClick ? "fade-in" : "fade-out"
          }`}
        >
          <ul>
            <li>
              <Link to="/account">Login</Link>
            </li>
            <li>
              <Link to="/account">My Account</Link>
            </li>
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
            <li>
              <Link to="/cart">My Order</Link>
            </li>
          </ul>
        </div>

        <button className="shopping-cart-icon" onClick={() => cartDropdown()}>
          <i className="fa-solid fa-cart-shopping"></i>
          <div className="cart-count">{cartCount}</div>
        </button>
        <div
          className={`nav-cart-dropdown ${
            isCartClick ? "fade-in" : "fade-out"
          }`}
        >
          {cartList.map((item) => (
            <div key={item.id} className="nav-cart-display-body">
              <div className="nav-cart-display-img">
                <img src={item.image} alt="" className="nav-card-img-small" />
              </div>
              <div className="nav-cart-display-right">
                <div className="nav-cart-display-title">{item.title}</div>
                <div className="nav-cart-display-price">SGD {item.price}</div>
                <div className="nav-cart-display-quantity">
                  <div className="nav-minus">
                    <button onClick={() => handleDecreaseQuantity(item.id)}>
                      -
                    </button>
                  </div>
                  <div className="nav-quantity">{item.quantity}</div>
                  <div className="nav-add">
                    <button onClick={() => handleIncreaseQuantity(item.id)}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {cartCount > 0 && (
            <button className="nav-cart-button" onClick={cart}>
              Go to Cart
            </button>
          )}
        </div>
        <button
          className={`menu-bar ${isOpen ? "" : "menu"}`}
          onClick={toggleMenu}
        >
          <FaBars />
        </button>
        <button
          className={`menu-bar ${isOpen ? "menu-x" : ""}`}
          onClick={toggleMenu}
        >
          <FaTimes />
        </button>
      </div>
    </nav>
  );
}

export default Nav;
