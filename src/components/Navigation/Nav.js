import "./Nav.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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
        <button className="settings-icon">
          <i className="fa-solid fa-gear"></i>
        </button>

        <button className="shopping-cart-icon" onClick={cart}>
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
