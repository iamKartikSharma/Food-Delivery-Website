import { useContext } from 'react';
import './BlogDisplay.css'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const BlogDisplay = () => {
    const { StoreContext } = useContext(StoreContext);
    const { blogList } = useContext(StoreContext);
    return (
      <>
      <Navbar/>
        <div className="blog-menu">
          <div className="blog-display" id="blog-display">
            <h2 className="blog-dishes-head">Top Blogs near you</h2>
            <div className="blog-list">
              {blogList && blogList.length > 0 ? (
                blogList.map((item, index) => (
                  <div className="blog-item" key={item._id || index} id={item._id}>
                    <img
                      src={`/images/${item.image}`}
                      alt={item.title}
                      className="blog-image"
                    />
                    <div className="blog-content">
                      <h3 className="blog-title">{item.title}</h3>
                      <p className="blog-author">By {item.author}</p>
                      <p className="blog-text">
                        {item.content ? `${item.content.slice(0, 100)}...` : "No content available"}
                      </p>
                      <button className="read-more">Read More</button>
                    </div>
                  </div>
                ))
              ) : (
                <p>No blogs available</p>
              )}
            </div>
          </div>
  
          <div className="ads">
            {/* Advertisements or additional content can go here */}
          </div>
        </div>
        <Footer/>
      </>
    );
  };
  
export default BlogDisplay;