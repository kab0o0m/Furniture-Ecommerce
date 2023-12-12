import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      {/* Description */}
      <div className="footer-description">
        <Link to="/" className="footer-title">
          Furvo
        </Link>
        <p>
          Whether you're looking to furnish your entire home or just add a few
          new pieces, we have something for everyone. Our collection includes a
          wide range of styles, from modern and contemporary to traditional and
          rustic.
        </p>
        <div className="footer-icons">
          <Link to="/">
            <i className="fa-brands fa-facebook"></i>
          </Link>
          <Link to="/">
            <i className="fa-brands fa-twitter"></i>
          </Link>
          <Link to="/">
            <i className="fa-brands fa-google"></i>
          </Link>
          <Link to="/">
            <i className="fa-brands fa-linkedin-in"></i>
          </Link>
          <Link to="/">
            <i className="fa-brands fa-square-instagram"></i>
          </Link>
        </div>
      </div>
      {/* Quick Links */}
      <div className="quick-links">
        <h3>QUICK LINKS</h3>
        <Link to="/about">About</Link>
        <Link to="/delivery">Delivery Information</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/tnc">Terms & Conditions</Link>
        <Link to="/shop">Best Selling Products</Link>
      </div>
      {/* Accounts */}
      <div className="accounts">
        <h3>ACCOUNTS</h3>
        <Link to="/account">My Account</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/cart">My Order</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/account">My Address</Link>
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
