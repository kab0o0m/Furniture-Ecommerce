import "./Checkout.css";
import { getCheckoutList, setCheckoutList } from "../../CheckoutList";

const Checkout = () => {
  return (
    <div className="checkout">
      {/* Header */}
      <div className="checkout-header">
        <a href="/">Home</a>
        <div>/</div>
        <div className="shop-header-page">
          <p>Checkout</p>
        </div>

        {/* Display cart */}
      </div>
    </div>
  );
};

export default Checkout;
