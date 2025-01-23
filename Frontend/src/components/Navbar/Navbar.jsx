import { useState, useEffect, useContext } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets.js";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext.jsx";


const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const { getTotalAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(token);
  const [userProfile, setUserProfile] = useState(null);


  useEffect(() => {
    setIsAuthenticated(!token);
  }, [token]);

  const logout = () => {
    console.log("jvhbh")
    // const authInstance = window.gapi.auth2.getAuthInstance();
    // authInstance.signOut().then(() => {
      setToken(null);
      localStorage.removeItem("token");
      setIsAuthenticated(false);
      setUserProfile(null);
      setShowLogin(false);
      navigate("/");
    // });
  };

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("mode") === "dark"
  );

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    const mode = darkMode ? "dark" : "light";
    body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("mode", mode);
  }, [darkMode]);

  const openMenu = () => {
    document.querySelector(".menu-drop").style.transform = "translateY(0)";
    document.querySelector(".menu-drop").style.display = "flex";
    document.querySelector(".header-content").style.display = "none";
  };

  const closeMenu = () => {
    document.querySelector(".menu-drop").style.transform = "translateY(-100%)";
    document.querySelector(".menu-drop").style.display = "none";
    document.querySelector(".header-content").style.display = "flex";
  };

  return (
    <>
      <div className="header">
        <div className="menu-drop">
          <div className="nav-close">
            <Link to="/">
              <div className="header-logo">
                <img
                  src={assets.bakery_icon}
                  alt="CakeBake"
                  className="header-img"
                />
                <h1 className="title">YummyBites</h1>
              </div>
            </Link>
            <i className="fas fa-close nav-cross" onClick={closeMenu}></i>
          </div>
          <nav className="menu-links">
            {/* Menu Links */}
            <Link
              onClick={() => {
                setMenu("Home");
                closeMenu();
              }}
              to="/"
              className={menu === "Home" ? "active" : "nav-link"}
            >
              Home
            </Link>
            <Link
              onClick={() => {
                setMenu("Services");
                closeMenu();
              }}
              to="#services"
              className={menu === "Services" ? "active" : "nav-link"}
            >
              Services
            </Link>
            <Link
              onClick={() => {
                setMenu("AI");
                closeMenu();
              }}
              to="/AI"
              className={menu === "AI" ? "active" : "nav-link"}
            >
              Ask AI
            </Link>
            <Link
              onClick={() => {
                setMenu("Blogs");
                closeMenu();
              }}
              to="/Blogs"
              className={menu === "Blogs" ? "active" : "nav-link"}
            >
              Blogs
            </Link>
            <Link
              onClick={() => {
                setMenu("Courses");
                closeMenu();
              }}
              to="/Courses"
              className={menu === "Courses" ? "active" : "nav-link"}
            >
              Courses
            </Link>
            <div className="mode" onClick={toggleDarkMode}>
              <div className={`ball ${darkMode ? "right-ball" : ""}`}></div>
            </div>
          </nav>
        </div>

        <div className="header-content">
          <Link to="/">
            <div className="header-logo">
              <img
                src={assets.bakery_icon}
                alt="CakeBake"
                className="header-img"
              />
              <h1 className="title">YummyBites</h1>
            </div>
          </Link>
          <nav className="navbar">
            {/* Navbar Links */}
            <Link
              onClick={() => setMenu("Home")}
              to="/"
              className={menu === "Home" ? "active" : "nav-link"}
            >
              Home
            </Link>
            <Link
              onClick={() => setMenu("Services")}
              to="/#services"
              className={menu === "Services" ? "active" : "nav-link"}
            >
              Services
            </Link>
            <Link
              onClick={() => setMenu("AI")}
              to="/AI"
              className={menu === "AI" ? "active" : "nav-link"}
            >
              Ask AI
            </Link>
            <Link
              onClick={() => setMenu("Blogs")}
              to="/Blogs"
              className={menu === "Blogs" ? "active" : "nav-link"}
            >
              Blogs
            </Link>
            <Link
              onClick={() => setMenu("Courses")}
              to="/Courses"
              className={menu === "Courses" ? "active" : "nav-link"}
            >
              Courses
            </Link>
            <div className="mode" onClick={toggleDarkMode}>
              <div className={`ball ${darkMode ? "right-ball" : ""}`}></div>
            </div>
            {isAuthenticated ? (
              <div className="navbar-profile">
                <img
                  src={userProfile?.imageUrl || assets.profile_icon}
                  alt="Profile Icon"
                />
                <img onClick={logout} src={assets.logout_icon} alt="Logout" />
              </div>
            ) : (
              <a className="nav-link">
                <button
                  className="btn-class"
                  onClick={() => setShowLogin(true)}
                >
                  Sign In
                </button>
              </a>
            )}
            <Link to="/PlaceOrder" alt="My orders">
                  <i className="fa-solid fa-box myorders"></i>
                </Link>
                <Link className="cart-icon" to="/Cart">
                  <i className="fas fa-cart-shopping" id="cart-show"></i>
                  <div className={getTotalAmount() === 0 ? "" : "num"}></div>
                </Link>
          </nav>
          <div className="menu-btn">
                <Link to="/PlaceOrder" alt="My orders">
                  <i className="fa-solid fa-box myorders"></i>
                </Link>
                <Link className="cart-icon" to="/Cart">
                  <i className="fas fa-cart-shopping" id="cart-show"></i>
                  <div className={getTotalAmount() === 0 ? "" : "num"}></div>
                </Link>
            <i className="fas fa-bars menu-icon" onClick={openMenu}></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
