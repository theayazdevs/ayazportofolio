import React, { useState } from "react";
import "../assets/styles/navigationbar.css";
import { Link } from "react-router-dom";

function Navigationbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
      <div className="navbar-brand">
        <a href="/" className="navbar-logo">
          Ayaz Ahmad
        </a>
      </div>
      <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <Link to="/" className="navbar-link" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/projects" className="navbar-link">
          Projects
        </Link>
        <Link to="/contact" className="navbar-link" onClick={toggleMenu}>
          Contact
        </Link>
      </div>
      <div
        className={`navbar-menu-toggle ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className={`bar ${isMenuOpen ? "active" : ""}`} />
        <div className={`bar ${isMenuOpen ? "active" : ""}`} />
        <div className={`bar ${isMenuOpen ? "active" : ""}`} />
      </div>
    </nav>
  );
}

export default Navigationbar;
