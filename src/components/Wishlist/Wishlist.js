import "./Wishlist.css";
import { getWishlist, setWishlist } from "../../Wishlist";
import { Link } from "react-router-dom";
import { useState } from "react";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState(getWishlist);

  return (
    <div className="wishlist">
      {/* Header */}
      <div className="wishlist-header">
        <Link to="/">Home</Link>
        <div>/</div>
        <div className="shop-header-page">
          <p>WishList</p>
        </div>
      </div>

      {/* Body */}
      {/* Body */}
      <div className="wishlist-body">
        {/* Display cart-header */}
        {wishlistItems.length > 0 && (
          <div className="wishlist-display-header">
            <div className="wishlist-display-img-header">Image</div>
            <div className="wishlist-display-title-header">Product</div>
            <div className="wishlist-display-price-header">Price</div>
            <div className="wishlist-display-discount-header">Discount</div>
          </div>
        )}

        {/* Display cart-body */}
        {wishlistItems.length > 0 &&
          wishlistItems.map((item) => (
            <div key={item.id} className="wishlist-display-body">
              <div className="wishlist-display-img">
                <img src={item.image} alt="" className="card-img-small" />
              </div>
              <div className="wishlist-display-title">{item.description}</div>
              <div className="wishlist-display-price">SGD {item.price}</div>
              <div className="wishlist-display-discount">None</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Wishlist;
