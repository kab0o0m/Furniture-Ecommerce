import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      {/* Description */}
      <div className="footer-description">
        <Link to="/Furniture-Ecommerce-Website/" className="footer-title">
          Furvo
        </Link>
        <p>
          Connect with us on Facebook, Twitter and Instagram! Get your daily
          dose of style inspiration, exclusive offers, and behind-the-scenes
          fun. We can't wait to see you there!
        </p>
        <div className="footer-icons">
          <Link to="/Furniture-Ecommerce-Website/">
            <i className="fa-brands fa-facebook"></i>
          </Link>
          <Link to="/Furniture-Ecommerce-Website/">
            <i className="fa-brands fa-twitter"></i>
          </Link>
          <Link to="/Furniture-Ecommerce-Website/">
            <i className="fa-brands fa-google"></i>
          </Link>
          <Link to="/Furniture-Ecommerce-Website/">
            <i className="fa-brands fa-linkedin-in"></i>
          </Link>
          <Link to="/Furniture-Ecommerce-Website/">
            <i className="fa-brands fa-square-instagram"></i>
          </Link>
        </div>
      </div>
      {/* Quick Links */}
      <div className="quick-links">
        <h3>QUICK LINKS</h3>
        <Link to="/Furniture-Ecommerce-Website/about">About</Link>
        <Link to="/Furniture-Ecommerce-Website/delivery">
          Delivery Information
        </Link>
        <Link to="/Furniture-Ecommerce-Website/privacy">Privacy Policy</Link>
        <Link to="/Furniture-Ecommerce-Website/tnc">Terms & Conditions</Link>
        <Link to="/Furniture-Ecommerce-Website/shop">
          Best Selling Products
        </Link>
      </div>
      {/* Accounts */}
      <div className="accounts">
        <h3>ACCOUNTS</h3>
        <Link to="/Furniture-Ecommerce-Website/account">My Account</Link>
        <Link to="/Furniture-Ecommerce-Website/wishlist">Wishlist</Link>
        <Link to="/Furniture-Ecommerce-Website/cart">My Order</Link>
        <Link to="/Furniture-Ecommerce-Website/checkout">Checkout</Link>
        <Link to="/Furniture-Ecommerce-Website/account">My Address</Link>
      </div>
      {/* Newsletter */}
      <div className="newsletter">
        <h3>NEWSLETTER</h3>
        <p>Subscribe to our newsletter for the latest updates</p>
        <form action="">
          <input
            type="email"
            placeholder="Your email address "
            id="newsletter-email"
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Footer;
