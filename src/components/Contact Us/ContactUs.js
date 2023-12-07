import "./ContactUs.css";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="contact-us">
      {/* Header */}
      <div className="contact-us-header">
        <Link to="/">Home</Link>
        <div>/</div>
        <div className="contact-us-header-page">
          <p>Contact</p>
        </div>
      </div>
      <div className="contact-info">
        <h1>Contact Info</h1>
        <div className="contact-details">
          <div className="contact-details-1">
            <i class="fa-solid fa-location-dot"></i>
            <span>456 Comfort Street, Cosyville Singapore 123456</span>
          </div>
          <div className="contact-details-1">
            <i class="fa-solid fa-phone"></i>
            <span>+65 6978 4212</span>
          </div>
          <div className="contact-details-1">
            <i class="fa-solid fa-envelope"></i>
            <span>Info@furvo.com</span>
          </div>
        </div>
      </div>
      <div className="send-message">
        <h1>Send Message</h1>
        <form>
          <div className="form-header">
            <div className="name">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="email">
              <label htmlFor="email">Your Email</label>
              <input type="text" id="email" name="email" required />
            </div>
          </div>
          <div className="form-header-2">
            <label htmlFor="remarks">Message</label>
          </div>
          <div className="form-input-2">
            <textarea name="remarks" id="remarks" rows="10"></textarea>
          </div>
          <div className="btn">
            <button type="submit">Submit Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
