import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>
        Click <Link to="/">here</Link> to shop Furvo
      </p>
    </div>
  );
};

export default NotFound;
