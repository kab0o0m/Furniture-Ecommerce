import "./Wishlist.css";
import { getWishlist, setWishlist } from "../../Wishlist";
import { Link } from "react-router-dom";
import { useState } from "react";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState(getWishlist);

  const filtered = (item) => {
    setWishlistItems((wishlistItems) => {
      let updatedWishlistItems = [...wishlistItems];

      updatedWishlistItems = updatedWishlistItems.filter(
        (wishlistItem) => wishlistItem.id !== item.id
      );

      setWishlist(updatedWishlistItems);
      console.log(updatedWishlistItems);
      return updatedWishlistItems;
    });
  };
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
        {/* Display wishlist-header */}
        {wishlistItems.length > 0 && (
          <div className="wishlist-display-header">
            <div className="wishlist-display-img-header">Image</div>
            <div className="wishlist-display-title-header">Product</div>
            <div className="wishlist-display-price-header">Price</div>
            <div className="wishlist-display-discount-header">Discount</div>
            <div className="wishlist-display-remove-header">Remove</div>
          </div>
        )}

        {/* Display wishlist-body */}
        {wishlistItems.length > 0 &&
          wishlistItems.map((item) => (
            <div key={item.id} className="wishlist-display-body">
              <div className="wishlist-display-img">
                <img src={item.image} alt="" className="card-img-small" />
              </div>
              <div className="wishlist-display-title">{item.description}</div>
              <div className="wishlist-display-price">SGD {item.price}</div>
              <div className="wishlist-display-discount">None</div>
              <div className="wishlist-display-remove">
                <button onClick={() => filtered(item)}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Wishlist;
