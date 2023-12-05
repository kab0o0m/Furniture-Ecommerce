import { useNavigate } from "react-router-dom";
import "./Blog.css";

const Blog = () => {
  const navigate = useNavigate();

  const readMore = () => {
    navigate("/blog");
  };
  return (
    <div className="blog">
      {/* Header */}
      <div className="blog-header">
        <a href="/">Home</a>
        <div>/</div>
        <div className="blog-header-page">
          <p>Blog</p>
        </div>
      </div>

      {/* Display */}
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

export default Blog;
