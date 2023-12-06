import "./Checkout.css";
import { getCheckoutList, setCheckoutList } from "../../CheckoutList";
import IMAGES from "../../Images";
import { useState } from "react";

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
      // If the quantity is already 1, you might want to remove the item
      updateQuantity(itemId, 0);
    }
  };

  const handleIncreaseQuantity = (itemId) => {
    const item = cartList.find((item) => item.id === itemId);
    if (item) {
      updateQuantity(itemId, item.quantity + 1);
    }
  };

  return (
    <div className="checkout">
      {/* Header */}
      <div className="checkout-header">
        <a href="/">Home</a>
        <div>/</div>
        <div className="shop-header-page">
          <p>Checkout</p>
        </div>
      </div>

      {/* Display cart-header */}
      {cartList.length > 0 && (
        <div className="checkout-display">
          <div className="checkout-display-img">Image</div>
          <div className="checkout-display-title">Product</div>
          <div className="checkout-display-price">Price</div>
          <div className="checkout-display-quantity">Quantity</div>
          <div className="checkout-display-total">Total</div>
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
            <div className="checkout-display-price">{item.price}</div>
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
              {item.price * item.quantity}
            </div>
          </div>
        ))}

      {/* If empty cart display */}
      <div className="no-cart">
        <h1>Your Cart is Empty</h1>
        <p>Click</p>
        <a href="/shop">here</a>
      </div>
    </div>
  );
};

export default Checkout;
