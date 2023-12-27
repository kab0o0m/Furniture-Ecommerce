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

  //Decreases quantity by 1 for specific item
  const handleDecreaseQuantity = (itemId) => {
    const item = cartList.find((item) => item.id === itemId);
    if (item && item.quantity > 1) {
      updateQuantity(itemId, item.quantity - 1);
    } else {
      // If the quantity is already 1, remove the item
      updateQuantity(itemId, 0);
    }
  };

  //Increases quantity by 1 for specific item
  const handleIncreaseQuantity = (itemId) => {
    const item = cartList.find((item) => item.id === itemId);
    if (item) {
      updateQuantity(itemId, item.quantity + 1);
    }
  };

  //Updates cart count everytime cartlist is updated
  useEffect(() => {
    setCartCount(
      getCheckoutList().reduce((total, item) => total + item.quantity, 0)
    );
    setCartList(getCheckoutList());
  }, [cartList]);

  // Auto scrolls to the top of the webpage
  const windowScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  //Settings dropdown
  const settingsDropdown = () => {
    setIsSettingsClick(!isSettingsClick);
    setIsCartClick(false);
  };

  //Shopping cart dropdown
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
    navigate("/Furniture-Ecommerce-Website/cart");
    windowScrollToTop();
  };

  const search = () => {
    navigate("/Furniture-Ecommerce-Website/search");
    windowScrollToTop();
  };

  const closeMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    }
    windowScrollToTop();
  };

  return (
    <nav>
      <Link to="/Furniture-Ecommerce-Website/" className="site-title">
        Furvo
      </Link>
      <ul
        id="subnavbar"
        className={`${isOpen ? "#subnavbar active" : "#subnavbar"}`}
      >
        <li>
          <Link to="/Furniture-Ecommerce-Website/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/Furniture-Ecommerce-Website/shop" onClick={closeMenu}>
            Shop
          </Link>
        </li>
        <li>
          <Link to="/Furniture-Ecommerce-Website/wishlist" onClick={closeMenu}>
            Wishlist
          </Link>
        </li>
        <li>
          <Link to="/Furniture-Ecommerce-Website/about" onClick={closeMenu}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/Furniture-Ecommerce-Website/contact" onClick={closeMenu}>
            Contact Us
          </Link>
        </li>
      </ul>
      <div className="menu-right">
        <button className="search-icon" onClick={() => search()}>
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
              <Link to="/Furniture-Ecommerce-Website/account">Login</Link>
            </li>
            <li>
              <Link to="/Furniture-Ecommerce-Website/account">Account</Link>
            </li>
            <li>
              <Link to="/Furniture-Ecommerce-Website/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link to="/Furniture-Ecommerce-Website/checkout">Checkout</Link>
            </li>
            <li>
              <Link to="/Furniture-Ecommerce-Website/cart">My Order</Link>
            </li>
          </ul>
        </div>

        <button className="shopping-cart-icon" onClick={() => cartDropdown()}>
          <i className="fa-solid fa-cart-shopping"></i>
          <div className="cart-count">{cartCount}</div>
        </button>
        {cartCount > 0 && (
          <div
            className={`nav-cart-dropdown ${
              isCartClick ? "fade-in" : "fade-out"
            }`}
          >
            <h3>Shopping Cart</h3>
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
            <button className="nav-cart-button" onClick={cart}>
              Go to Cart
            </button>
          </div>
        )}

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
