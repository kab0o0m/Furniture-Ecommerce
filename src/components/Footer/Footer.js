import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      {/* Description */}
      <div className="footer-description">
        <a href="/" className="footer-title">
          Furvo
        </a>
        <p>
          Whether you're looking to furnish your entire home or just add a few
          new pieces, we have something for everyone. Our collection includes a
          wide range of styles, from modern and contemporary to traditional and
          rustic.
        </p>
        <div className="footer-icons">
          <a href="/">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-google"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-square-instagram"></i>
          </a>
        </div>
      </div>
      {/* Quick Links */}
      <div className="quick-links">
        <h3>QUICK LINKS</h3>
        <a href="/">About</a>
        <a href="/">Delivery Information</a>
        <a href="/">Privacy Policy</a>
        <a href="/">Terms & Conditions</a>
        <a href="/">Best Selling Products</a>
      </div>
      {/* Accounts */}
      <div className="accounts">
        <h3>ACCOUNTS</h3>
        <a href="/">My Account</a>
        <a href="/">Wishlist</a>
        <a href="/">My Order</a>
        <a href="/">Checkout</a>
        <a href="/">My Address</a>
      </div>
      {/* Newsletter */}
      <div className="newsletter">
        <h3>NEWSLETTER</h3>
        <p>Subscribe to our newsletter for the latest updates</p>
        <form action="">
          <input type="email" placeholder="Your email address " />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Footer;
