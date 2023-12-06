import { useState } from "react";
import "./Shop.css";
import IMAGES from "../../Images";
import { getWishlist, setWishlist } from "../../Wishlist";

const Shop = () => {
  const [selectedOption, setSelectedOption] = useState("Select an option");
  const [currentPage, setCurrentPage] = useState(1);
  const [wishlistItems, setWishlistItems] = useState(getWishlist);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(IMAGES.length / itemsPerPage);
  const [currentLayout, setCurrentLayout] = useState("shop-display-grid");
  const [currentCardLayout, setCurrentCardLayout] = useState("card-column");
  const [imageSize, setImageSize] = useState("card-img-large");
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

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const filteredItems = IMAGES.slice(startIndex, endIndex);

  const addToWishlist = (item) => {
    setWishlistItems((wishlistItems) => {
      let updatedWishlistItems = [...wishlistItems];

      const isThere = updatedWishlistItems.find(
        (wishlistItem) => wishlistItem.id === item.id
      );

      if (!isThere) {
        updatedWishlistItems.push(item);
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
              <p className="card-info-1">{item.description}</p>
              <p className="card-info-2">{item.price}</p>
              <div className="card-icons">
                <div className="card-icons-1">
                  <button
                    className="wishlist"
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
                  <button className="preview">
                    <i className="fa-regular fa-eye"></i>
                  </button>
                </div>
                <div className="card-icons-3">
                  <button className="add-to-cart">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

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
