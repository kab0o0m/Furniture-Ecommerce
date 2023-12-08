import "./Homepage.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import IMAGES from "../../Images.js";
import { useState, useContext } from "react";
import { getWishlist, setWishlist } from "../../Wishlist";
import { UserContext } from "../../App";
import { getCheckoutList, setCheckoutList } from "../../CheckoutList";

const Homepage = () => {
  const [isWishlistPopup, setIsWishlistPopup] = useState(false);
  const [wishlistItems, setWishlistItems] = useState(getWishlist);
  const { cartCount, setCartCount } = useContext(UserContext);
  const [checkoutItems, setCheckoutItems] = useState(getCheckoutList);
  const [isAddToCartPopup, setIsAddToCartPopup] = useState(false);
  const [isEyePopup, setIsEyePopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openEyePopup = (item) => {
    setSelectedItem(item);
    setIsEyePopup(true);
  };

  const closeEyePopup = () => {
    setIsEyePopup(false);
  };

  const navigate = useNavigate();

  const windowScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const readMore = () => {
    navigate("/blog");
    windowScrollToTop();
  };

  const shopNow = () => {
    navigate("/shop");
    windowScrollToTop();
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

  const isInWishlist = (item) => {
    return wishlistItems.find((wishlistItem) => wishlistItem.id === item.id);
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

      console.log(updatedCheckoutList);
      console.log("Checkout count: " + cartCount);
      return updatedCheckoutList;
    });
  };
  const isInCart = (item) => {
    return checkoutItems.find((checkoutItem) => checkoutItem.id === item.id);
  };

  return (
    <div className="homepage">
      {/* New Arrivals */}
      <div className="homepage-title">
        <motion.p
          className="para1"
          initial={{
            opacity: 0,
            translateX: -1000,
          }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          NEW ARRIVALS
        </motion.p>
        <motion.p
          className="para2"
          initial={{
            opacity: 0,
            translateX: -1000,
          }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          STINGRAY CHAIR
        </motion.p>
        <motion.p
          className="para3"
          initial={{
            opacity: 0,
            translateX: -1000,
          }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          Furniture can be made using a variety of woodworking joints which
          often<br></br>reflect the local culture.
        </motion.p>
        <motion.button
          className="shop-now-button"
          onClick={shopNow}
          initial={{
            opacity: 0,
            translateX: -1000,
          }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        >
          SHOP NOW
        </motion.button>
      </div>
      <div className="new-arrivals">
        <p className="new-arrivals-title">New Arrivals</p>
        <p className="new-arrivals-description">
          When it comes to furnitures, choices are galore on Furvo
        </p>
        <div className="new-arrivals-display">
          {IMAGES.filter((item) => item.id >= 1 && item.id <= 8).map((item) => {
            return (
              <div key={item.id} className="card">
                <div>
                  <img src={item.image} className="card-img" />
                </div>
                <p className="card-info-1">{item.title}</p>
                <p className="card-info-2">SGD {item.price}</p>
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
      </div>

      {/* Best Sale */}
      <div className="best-sale">
        <p className="para1">BEST SALE PRODUCT</p>
        <p className="para2">Comfort Surround Chair</p>
        <button className="shop-now-button" onClick={shopNow}>
          SHOP NOW
        </button>
      </div>

      {/* Popups */}
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

      {/* Latest Blog */}
      <div className="latest-blog">
        <p className="latest-blog-title">LATEST BLOG</p>
        <p className="latest-blog-description">
          From envelope clutches and slouchy totes to structured shoulder bags
          and stylish handbags
        </p>
        <div className="latest-blog-display">
          <div className="latest-blog-1">
            <div className="latest-blog-1-img">
              <button className="latest-blog-button" onClick={readMore}>
                Read More
              </button>
            </div>
            <div className="latest-blog-1-description">
              <p className="latest-blog-1-description-1">
                Furnir Admin, 17 Jul 2018
              </p>
              <p className="latest-blog-1-description-2">
                It is a long established fact that a reader will
              </p>
            </div>
          </div>
          <div className="latest-blog-2">
            <div className="latest-blog-2-img">
              <button className="latest-blog-button" onClick={readMore}>
                Read More
              </button>
            </div>
            <div className="latest-blog-2-description">
              <p className="latest-blog-2-description-1">
                Furnir Admin, 17 Jul 2018
              </p>
              <p className="latest-blog-2-description-2">
                It is a long established fact that a reader will
              </p>
            </div>
          </div>
          <div className="latest-blog-3">
            <div className="latest-blog-3-img">
              <button className="latest-blog-button" onClick={readMore}>
                Read More
              </button>
            </div>
            <div className="latest-blog-3-description">
              <p className="latest-blog-3-description-1">
                Furnir Admin, 17 Jul 2018
              </p>
              <p className="latest-blog-3-description-2">
                It is a long established fact that a reader will
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
