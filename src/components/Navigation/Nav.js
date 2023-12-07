import "./Nav.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCheckoutList, setCheckoutList } from "../../CheckoutList";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(() =>
    getCheckoutList().reduce((total, item) => total + item.quantity, 0)
  );

  useEffect(() => {
    setCartCount(
      getCheckoutList().reduce((total, item) => total + item.quantity, 0)
    );
  }, [getCheckoutList()]);

  const windowScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const checkOut = () => {
    navigate("/checkout");
    windowScrollToTop();
  };

  return (
    <nav>
      <a href="/" className="site-title">
        Furvo
      </a>
      <ul
        id="subnavbar"
        className={`${isOpen ? "#subnavbar active" : "#subnavbar"}`}
      >
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/shop">Shop</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/wishlist">Wishlist</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>
      </ul>
      <div className="menu-right">
        <button className="search-icon">
          <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
        </button>
        <button className="settings-icon">
          <i className="fa-solid fa-gear"></i>
        </button>

        <button className="shopping-cart-icon" onClick={checkOut}>
          <i className="fa-solid fa-cart-shopping"></i>
          <div className="cart-count">{cartCount}</div>
        </button>

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
