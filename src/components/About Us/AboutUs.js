import "./AboutUs.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Header */}
      <div className="about-us-header">
        <Link to="/">Home</Link>
        <div>/</div>
        <div className="about-us-header-page">
          <p>About Us</p>
        </div>
      </div>

      {/* About Company */}
      <div className="about-company">
        <div className="about-company-img"></div>
        <div className="about-company-description">
          <h1>
            About <span>Company</span>
          </h1>
          <p>
            Welcome to Furvo, where craftsmanship meets comfort in every piece.
            As a leading furniture company, Furvo has been dedicated to
            transforming houses into homes since our inception. Our passion lies
            in creating exquisite and functional furniture that not only
            enhances the aesthetics of your space but also provides unparalleled
            comfort. At Furvo, we believe that furniture goes beyond mere
            functionality; it is an expression of your style and personality.
            With a commitment to quality materials and meticulous craftsmanship,
            each Furvo piece tells a story of elegance and enduring design.
            Whether you are furnishing a cozy corner or redesigning an entire
            living space, Furvo is your trusted partner in crafting environments
            that reflect your unique taste. Experience the artistry of furniture
            with Furvo – where every detail matters, and every piece is a
            statement of refined living.
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
