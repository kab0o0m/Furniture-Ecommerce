import "./Checkout.css";
import { getCheckoutList, setCheckoutList } from "../../CheckoutList";
import { useState } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [cartList, setCartList] = useState(getCheckoutList());

  const updateQuantity = (itemId, newQuantity) => {
    let updatedCartList = cartList.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );

    // Remove item from the cartList if the new quantity is 0
    updatedCartList = updatedCartList.filter((item) => item.quantity > 0);

    setCartList(updatedCartList);
    setCheckoutList(updatedCartList);
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
    <div className="checkout">
      {/* Header */}
      <div className="checkout-header">
        <Link to="/">Home</Link>
        <div>/</div>
        <div className="shop-header-page">
          <p>Checkout</p>
        </div>
      </div>

      {/* Body */}
      <div className="checkout-body">
        {/* Display cart-header */}
        {cartList.length > 0 && (
          <div className="checkout-display-header">
            <div className="checkout-display-img-header">Image</div>
            <div className="checkout-display-title-header">Product</div>
            <div className="checkout-display-price-header">Price</div>
            <div className="checkout-display-quantity-header">Quantity</div>
            <div className="checkout-display-total-header">Total</div>
          </div>
        )}

        {/* Display cart-body */}
        {cartList.length > 0 &&
          cartList.map((item) => (
            <div key={item.id} className="checkout-display-body">
              <div className="checkout-display-img">
                <img src={item.image} alt="" className="card-img-small" />
              </div>
              <div className="checkout-display-title">{item.description}</div>
              <div className="checkout-display-price">SGD {item.price}</div>
              <div className="checkout-display-quantity">
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
              <div className="checkout-display-total">
                SGD {(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
      </div>
      {/* Calculate Total Price */}
      {cartList.length > 0 && (
        <div className="calculate-price">
          <div className="cart-total-header">
            <h1>Cart Total</h1>
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

export default Checkout;
