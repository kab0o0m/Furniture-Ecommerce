import "./Cart.css";
import { getCheckoutList, setCheckoutList } from "../../CheckoutList";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

const Cart = () => {
  const { cartCount, setCartCount } = useContext(UserContext);
  const navigate = useNavigate();
  const windowScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const shop = () => {
    navigate("/shop");
    windowScrollToTop();
  };

  const checkOut = () => {
    navigate("/checkout");
    windowScrollToTop();
  };
  const [cartList, setCartList] = useState(getCheckoutList());

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

  const subtotal = () => {
    return getCheckoutList()
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const shipping = () => {
    return subtotal() > 150 ? (0).toFixed(2) : (50).toFixed(2);
  };

  const totalPrice = () => {
    return (parseFloat(subtotal()) + parseFloat(shipping())).toFixed(2);
  };

  return (
    <div className="cart">
      {/* Header */}
      <div className="cart-header">
        <Link to="/">Home</Link>
        <div>/</div>
        <div className="shop-header-page">
          <p>Shopping Cart</p>
        </div>
      </div>

      {/* Body */}
      {cartList.length > 0 && (
        <div className="cart-body">
          {/* Display cart-header */}

          <div className="cart-display-header">
            <div className="cart-display-subheader-1">
              <h1>Shopping Cart</h1>
            </div>
            <div className="cart-display-subheader-2">
              <div className="cart-display-img-header">Image</div>
              <div className="cart-display-title-header">Product</div>
              <div className="cart-display-price-header">Price</div>
              <div className="cart-display-quantity-header">Quantity</div>
              <div className="cart-display-total-header">Total</div>
            </div>
          </div>

          {/* Display cart-body */}
          {cartList.map((item) => (
            <div key={item.id} className="cart-display-body">
              <div className="cart-display-img">
                <img src={item.image} alt="" className="card-img-small" />
              </div>
              <div className="cart-display-title">{item.title}</div>
              <div className="cart-display-price">SGD {item.price}</div>
              <div className="cart-display-quantity">
                <div className="minus">
                  <button onClick={() => handleDecreaseQuantity(item.id)}>
                    -
                  </button>
                </div>
                <div className="quantity">{item.quantity}</div>
                <div className="add">
                  <button onClick={() => handleIncreaseQuantity(item.id)}>
                    +
                  </button>
                </div>
              </div>
              <div className="cart-display-total">
                SGD {(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
          <div className="continue-shopping">
            <button className="continue-shopping-button" onClick={shop}>
              <i className="fa-solid fa-chevron-left"></i> CONTINUE SHOPPING
            </button>
          </div>
        </div>
      )}
      {/* Calculate Total Price */}
      {cartList.length > 0 && (
        <div className="calculate-price">
          <div className="cart-total-header">
            <h1>Shopping Cart Total</h1>
            <p>- Free shipping over $150 -</p>
          </div>
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
          <div className="cart-button">
            <button className="checkout-cart-button" onClick={checkOut}>
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      )}
      {/* If empty cart display */}
      {cartList.length <= 0 && (
        <div className="no-cart">
          <h1>Your Cart is Empty :(</h1>
          <span>
            Continue browsing
            <Link to="/shop" className="no-cart-link">
              {" "}
              here{" "}
            </Link>
          </span>
        </div>
      )}
    </div>
  );
};

export default Cart;
