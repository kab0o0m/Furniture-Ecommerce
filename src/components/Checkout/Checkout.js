import "./Checkout.css";
import { Link, useNavigate } from "react-router-dom";
import { getCheckoutList, setCheckoutList } from "../../CheckoutList";
import { useState, useMemo, useContext } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { UserContext } from "../../App";

const Checkout = () => {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const changeHandler = (value) => setValue(value);
  const { cartCount, setCartCount, cartList, setCartList } =
    useContext(UserContext);
  const navigate = useNavigate();
  const windowScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const subtotal = () => {
    return getCheckoutList()
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const shop = () => {
    navigate("/cart");
    windowScrollToTop();
  };

  const home = () => {
    navigate("/");
    windowScrollToTop();
  };

  const shipping = () => {
    return subtotal() > 150 ? (0).toFixed(2) : (50).toFixed(2);
  };

  const totalPrice = () => {
    return (parseFloat(subtotal()) + parseFloat(shipping())).toFixed(2);
  };

  const clearCheckoutList = () => {
    setCheckoutList([]);
    home();
  };

  return (
    <div className="checkout">
      {/* Header */}
      <div className="checkout-header">
        <Link to="/Furniture-Ecommerce-Website/">Home</Link>
        <div>/</div>
        <div className="checkout-header-page">
          <p>Checkout</p>
        </div>
      </div>

      {/* Body */}
      {cartCount > 0 && (
        <div className="checkout-body">
          {/* Left of the screen */}
          <div className="checkout-left">
            <form onSubmit={() => clearCheckoutList()}>
              {/* Contact Info */}
              <div className="contact">
                <h2>Contact</h2>
                <input type="email" placeholder="Email" required />
                <div className="email-me">
                  <input type="checkbox" id="email-me" />
                  <label htmlFor="email-me">
                    Email me with news and offers
                  </label>
                </div>
              </div>
              {/* Delivery Info */}
              <div className="delivery">
                <h2>Delivery</h2>
                <Select
                  options={options}
                  value={value}
                  onChange={changeHandler}
                  className="country-select"
                  placeholder="Select Country..."
                />
                <div className="name">
                  <input type="name" placeholder="First Name" required />
                  <input type="name" placeholder="Last Name" required />
                </div>
                <div className="address">
                  <input type="address" placeholder="Address" required />
                  <input type="address" placeholder="Postal Code" required />
                </div>
              </div>

              {/* Payment */}
              <div className="payment">
                <h2>Payment</h2>
                <p>All transactions are secure and encrypted</p>
                <div className="cash">
                  <input type="radio" id="cash" name="paymentMethod" required />
                  <label htmlFor="cash">Cash on Delivery</label>
                  <img src="" alt="" />
                </div>
                <div className="visa">
                  <input type="radio" id="visa" name="paymentMethod" required />
                  <label htmlFor="visa">Visa / Master</label>
                </div>
                <button type="submit" className="submit-checkout">
                  Checkout
                </button>
              </div>
            </form>
          </div>
          {/* Right of the screen */}
          <div className="checkout-right">
            <div className="checkout-right-header">
              <h2>Shopping Cart</h2>
              <p>- Free shipping over $150 -</p>
            </div>
            {/* Display cart */}
            <div className="products">
              {cartList.map((item) => (
                <div key={item.id} className="product">
                  <div className="product-img">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="product-title">{item.title}</div>
                  <div className="product-price">SGD {item.price}</div>
                  <div className="product-quantity">x{item.quantity}</div>
                </div>
              ))}
              <div className="back">
                <button className="back-to-cart" onClick={shop}>
                  <i class="fa-solid fa-chevron-left"></i> BACK TO CART
                </button>
              </div>
            </div>

            {/* Calculate Total Price */}
            {cartList.length > 0 && (
              <div className="calculate-price">
                <div className="cart-total-header"></div>
                <div className="cart-total-body">
                  <div className="cart-subtotal">
                    <div className="subtotal">Subtotal: </div>
                    <div className="subtotal-price">SGD {subtotal()}</div>
                  </div>
                  <div className="cart-shipping">
                    <div className="shipping">Shipping: </div>
                    <div className="shipping-price">SGD {shipping()}</div>
                  </div>
                  <div className="cart-total">
                    <div className="total">Total Price: </div>
                    <div className="total-price">SGD {totalPrice()}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* If cart empty  */}
      {cartList.length <= 0 && (
        <div className="no-cart">
          <h1>Your Cart is Empty :(</h1>
          <span>
            Continue browsing
            <Link
              to="/Furniture-Ecommerce-Website/shop"
              className="no-cart-link"
            >
              {" "}
              here{" "}
            </Link>
          </span>
        </div>
      )}
    </div>
  );
};

export default Checkout;
