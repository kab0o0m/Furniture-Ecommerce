import { useState, useContext } from "react";
import "./Shop.css";
import IMAGES from "../../Images";
import { getWishlist, setWishlist } from "../../Wishlist";
import { getCheckoutList, setCheckoutList } from "../../CheckoutList";
import { UserContext } from "../../App";
import { motion } from "framer-motion";

const Shop = () => {
  const [selectedOption, setSelectedOption] = useState("Select an option");
  const [currentPage, setCurrentPage] = useState(1);
  const [wishlistItems, setWishlistItems] = useState(getWishlist);
  const [isWishlistPopup, setIsWishlistPopup] = useState(false);
  const [currentLayout, setCurrentLayout] = useState("shop-display-grid");
  const [currentCardLayout, setCurrentCardLayout] = useState("card-column");
  const [imageSize, setImageSize] = useState("card-img-large");
  const [checkoutItems, setCheckoutItems] = useState(getCheckoutList);
  const [isAddToCartPopup, setIsAddToCartPopup] = useState(false);
  const [isEyePopup, setIsEyePopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(IMAGES.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const filteredItems = IMAGES.slice(startIndex, endIndex);
  const { cartCount, setCartCount } = useContext(UserContext);

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
  const addToShoppingCart = (item) => {
    setCheckoutItems((checkoutItems) => {
      let updatedCheckoutList = [...checkoutItems];

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
      closeEyePopup();
      return updatedCheckoutList;
    });
  };

  const WishlistPopup = () => {
    setIsWishlistPopup(true);

    const timeoutID = setTimeout(() => {
      setIsWishlistPopup(false);
    }, 2000);
  };

  const options = [
    "Featured",
    "Best Selling",
    "Alphabetically, A-Z",
    "Alphabetically, Z-A",
    "Price, low to high",
    "Price, high to low",
  ];

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const displayFlex = () => {
    setCurrentLayout("shop-display-flex");
    setCurrentCardLayout("card-row");
    setImageSize("card-img-small");
  };

  const displayGrid = () => {
    setCurrentLayout("shop-display-grid");
    setCurrentCardLayout("card-column");
    setImageSize("card-img-large");
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

  const isInWishlist = (item) => {
    return wishlistItems.find((wishlistItem) => wishlistItem.id === item.id);
  };

  const isInCart = (item) => {
    return checkoutItems.find((checkoutItem) => checkoutItem.id === item.id);
  };

  return (
    <div className="shop">
      {/* Header */}
      <div className="shop-header">
        <a href="/">Home</a>
        <div>/</div>
        <div className="shop-header-page">
          <p>Products</p>
        </div>
      </div>

      {/* Sorting */}
      <div className="shop-sort">
        <div className="icons">
          <div className="icon1">
            <button onClick={displayGrid}>
              <i className="fa fa-th"></i>
            </button>
          </div>
          <div className="icon2">
            <button onClick={displayFlex}>
              <i className="fa fa-list"></i>
            </button>
          </div>
        </div>

        <div className="dropdown">
          <form action="">
            <select value={selectedOption} onChange={handleChange}>
              <option value="">Select an option</option>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </form>
        </div>
      </div>

      {/* Display Products */}
      <div className={currentLayout}>
        {filteredItems.map((item) => {
          return (
            <div key={item.id} className={currentCardLayout}>
              <div className="card-img">
                <img src={item.image} className={imageSize} />
              </div>
              <div className="card-info-description">
                <p className="card-info-1">{item.title}</p>
              </div>
              <div className="card-info-price">
                <p className="card-info-2">SGD {item.price}</p>
              </div>
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
          );
        })}
      </div>

      {/* Popups*/}
      {/* Wishlist Popup for left button*/}
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

      {/* Page selection */}
      <div className="pages">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => {
              setCurrentPage(index + 1);
              window.scrollTo({ top: 0, behavior: "smooth" }); // Scrolls to the top of the page
            }}
            className="pages-button"
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Shop;
