import "./Homepage.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import IMAGES from "../../Images.js";

const Homepage = () => {
  const navigate = useNavigate();
  const readMore = () => {
    navigate("/blog");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const shopNow = () => {
    navigate("/shop");
    window.scrollTo({ top: 0, behavior: "smooth" });
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
          When it comes to furnitures, choices are galore on Furnir
        </p>
        <div className="new-arrivals-display">
          {IMAGES &&
            IMAGES.filter((item) => item.id >= 1 && item.id <= 8).map(
              (item) => {
                return (
                  <div key={item.id} className="card">
                    <div>
                      <img src={item.image} className="card-img" />
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
              }
            )}

          {/*<div className="card">
            <div className="card-img card-img-1">
              <img src="" alt="" />
            </div>
            <p className="card-info-1">Dining Cushion Chair</p>
            <p className="card-info-2">SGD 69.00</p>
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
        </div>*/}
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
