import "./Search.css";
import { useState, useContext } from "react";
import IMAGES from "../../Images";
import { getWishlist, setWishlist } from "../../Wishlist";
import { UserContext } from "../../App";
import { getCheckoutList, setCheckoutList } from "../../CheckoutList";
import { motion } from "framer-motion";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [wishlistItems, setWishlistItems] = useState(getWishlist);
  const [isWishlistPopup, setIsWishlistPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEyePopup, setIsEyePopup] = useState(false);
  const [isAddToCartPopup, setIsAddToCartPopup] = useState(false);

  const { cartCount, setCartCount, cartList, setCartList } =
    useContext(UserContext);

  const handleSearch = () => {
    // Filter the IMAGES array based on the search query
    const filteredResults = IMAGES.filter((item) =>
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  const openEyePopup = (item) => {
    setSelectedItem(item);
    setIsEyePopup(true);
  };

  const closeEyePopup = () => {
    setIsEyePopup(false);
  };

  const addToCartPopup = () => {
    setIsAddToCartPopup(true);

    const timeoutID = setTimeout(() => {
      setIsAddToCartPopup(false);
    }, 2000);
  };

  const isInWishlist = (item) => {
    return wishlistItems.find((wishlistItem) => wishlistItem.id === item.id);
  };
  const isInCart = (item) => {
    return cartList.find((checkoutItem) => checkoutItem.id === item.id);
  };

  const WishlistPopup = () => {
    setIsWishlistPopup(true);

    const timeoutID = setTimeout(() => {
      setIsWishlistPopup(false);
    }, 3000);
  };

  const addToWishlist = (item) => {
    setWishlistItems((wishlistItems) => {
      let updatedWishlistItems = [...wishlistItems];

      const isThere = updatedWishlistItems.find(
        (wishlistItem) => wishlistItem.id === item.id
      );

      if (!isThere) {
        updatedWishlistItems.push(item);
        WishlistPopup();
      } else {
        updatedWishlistItems = updatedWishlistItems.filter(
          (wishlistItem) => wishlistItem.id !== item.id
        );
      }
      setWishlist(updatedWishlistItems);
      console.log(updatedWishlistItems);
      return updatedWishlistItems;
    });
  };

  const addToShoppingCart = (item) => {
    setCartList((cartList) => {
      let updatedCheckoutList = [...cartList];

      const existingItem = updatedCheckoutList.find(
        (checkoutItem) => checkoutItem.id === item.id
      );

      if (existingItem) {
        // Item already in the cart, update its quantity
        existingItem.quantity += 1;
      } else {
        // Item not in the cart, add it with quantity 1
        const newItem = { ...item, quantity: 1 };
        updatedCheckoutList.push(newItem);
      }
      // Update the cart count based on the total number of items in the cart
      const totalItemsInCart = updatedCheckoutList.reduce(
        (total, item) => total + item.quantity,
        0
      );

      addToCartPopup();
      setCartCount(totalItemsInCart);
      setCheckoutList(updatedCheckoutList);

      console.log(updatedCheckoutList);
      console.log("Checkout count: " + cartCount);
      return updatedCheckoutList;
    });
  };

  return (
    <div className="search">
      {/* Header */}
      <div className="search-header">
        <a href="/">Home</a>
        <div>/</div>
        <div className="search-header-page">
          <p>Search</p>
        </div>
      </div>

      {/* Body */}
      <div className="search-body">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search by description... eg. Chair"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input-box"
          />
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>

        {/* Display search results */}
        <div className="search-results">
          <div className="search-display">
            {searchResults.map((item) => (
              <div key={item.id} className="card-row">
                <div className="wishlist-display-img">
                  <img src={item.image} className="card-img" />
                </div>
                <div className="card-info-1">{item.title}</div>
                <div className="card-info-2">SGD {item.price}</div>
                <div className="card-icons">
                  <div className="card-icons-1">
                    <button
                      className="add-to-wishlist"
                      onClick={() => addToWishlist(item)}
                    >
                      <i
                        style={{ color: isInWishlist(item) ? "red" : "black" }}
                        className={`fa ${
                          isInWishlist(item) ? "fas" : "far"
                        } fa-heart`}
                      ></i>
                    </button>
                  </div>
                  <div className="card-icons-2">
                    <button
                      className="preview"
                      onClick={() => openEyePopup(item)}
                    >
                      <i className="fa-regular fa-eye"></i>
                    </button>
                  </div>
                  <div className="card-icons-3">
                    <button
                      className="add-to-cart"
                      onClick={() => addToShoppingCart(item)}
                    >
                      <i
                        style={{ color: isInCart(item) ? "#FF7E03" : "black" }}
                        className="fa-solid fa-cart-shopping"
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isWishlistPopup && (
        <div className="popup">
          <p>Item added to Wishlist</p>
          <button onClick={() => setIsWishlistPopup(false)}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      )}

      {/* Checkout Popup for middle button */}
      {isEyePopup && selectedItem && (
        <motion.div
          className="checkout-popup"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="checkout-popup-img">
            <img src={selectedItem.image} alt="" />
          </div>
          <div className="checkout-popup-right">
            <div className="popup-title">
              <h1>{selectedItem.title}</h1>
            </div>
            <div className="popup-price">
              <p>SGD {selectedItem.price}</p>
            </div>
            <div className="popup-description">
              <p>{selectedItem.description}</p>
            </div>

            <div className="checkout-add-button">
              <button
                className="add-button"
                onClick={() => addToShoppingCart(selectedItem)}
              >
                Add to cart
              </button>
            </div>
            <button className="close-button" onClick={closeEyePopup}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </motion.div>
      )}

      {/* Add to Cart Popup for right button*/}
      {isAddToCartPopup && (
        <div className="add-cart-popup">
          <p>Item added to Cart</p>
          <button onClick={() => setIsAddToCartPopup(false)}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
