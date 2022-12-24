import { React, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/style.css";

const Navbar = () => {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toogle("responsive_nav");
  };
  return (
    <header>
      <h3>Logo</h3>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">My work</a>
        <a href="/#">Blog</a>
        <a href="/#">About Me</a>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
        <button className="nav-btn" onClick={showNavBar}>
          <FaBars />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
