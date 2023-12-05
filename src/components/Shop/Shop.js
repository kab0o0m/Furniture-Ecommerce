import { useState } from "react";
import "./Shop.css";
import IMAGES from "../../Images";

const Shop = () => {
  const [selectedOption, setSelectedOption] = useState("Alphabetically, A-Z");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(IMAGES.length / itemsPerPage);
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

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const filteredItems = IMAGES.slice(startIndex, endIndex);

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
            <i class="fa fa-th"></i>
          </div>
          <div className="icon2">
            <i class="fa fa-list"></i>
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
      <div className="shop-display">
        {filteredItems.map((item) => {
          return (
            <div key={item.id} className="card">
              <div className="card-img">
                <img src={item.image} alt="" />
              </div>
              <p className="card-info-1">{item.description}</p>
              <p className="card-info-2">{item.price}</p>
              <div className="card-icons">
                <div className="card-icons-1">
                  <i class="fa-sharp fa-regular fa-heart"></i>
                </div>
                <div className="card-icons-2">
                  <i class="fa-regular fa-eye"></i>
                </div>
                <div className="card-icons-3">
                  <i class="fa-solid fa-cart-shopping"></i>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Page selection */}
      <div className="pages">
        <button></button>
      </div>
    </div>
  );
};

export default Shop;
