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
      return updatedWishlistItems;
    });
  };
  return (
    <div className="wishlist">
      {/* Header */}
      <div className="wishlist-header">
        <Link to="/Furniture-Ecommerce-Website/">Home</Link>
        <div>/</div>
        <div className="shop-header-page">
          <p>WishList</p>
        </div>
      </div>

      {/* Body */}
      {/* If wishlist > 0 */}
      {wishlistItems.length > 0 && (
        <div className="wishlist-body">
          {/* Display wishlist-header */}

          <div className="wishlist-display-header">
            <div className="wishlist-display-img-header">Image</div>
            <div className="wishlist-display-title-header">Product</div>
            <div className="wishlist-display-price-header">Price</div>
            <div className="wishlist-display-discount-header">Discount</div>
            <div className="wishlist-display-remove-header">Remove</div>
          </div>

          {/* Display wishlist-body */}

          {wishlistItems.map((item) => (
            <div key={item.id} className="wishlist-display-body">
              <div className="wishlist-display-img">
                <img src={item.image} alt="" className="card-img-small" />
              </div>
              <div className="wishlist-display-title">{item.title}</div>
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
      )}

      {/* if no items in wishlist */}
      {wishlistItems.length <= 0 && (
        <div className="no-cart">
          <h1>Your Wishlist is Empty :(</h1>
          <span>
            Add items to wishlist
            <Link
              to="/Furniture-Ecommerce-Website/shop"
              className="no-cart-link"
            >
              {" "}
              here
            </Link>
            !
          </span>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
