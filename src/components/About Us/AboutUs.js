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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ut
            perspiciatis eligendi ullam. Ipsam illum nostrum reiciendis, beatae
            laudantium ipsum earum sit ipsa quos aut provident quo vitae vero
            alias numquam minus vel pariatur dolor minima voluptatem nulla
            architecto, omnis atque recusandae! Quod doloremque nam omnis
            consequuntur maiores vero dicta!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ullam
            iusto veniam nisi eius voluptatem.
          </p>
        </div>
      </div>
      {/* Meet Our Team */}
      <div className="meet-team">
        <h1>Meet Our Team</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ea
          officia ullam. Dicta, voluptatem. Provident.
        </p>
        <div className="meet-team-info"></div>
      </div>
    </div>
  );
};

export default AboutUs;
