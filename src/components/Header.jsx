// Header.js
import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation

function Header() {
  // Use the useLocation hook to access the current location
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
      <Link className="navbar-brand" to="/">Saad Siddiqui</Link> {/* Use Link */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
            <Link className="nav-link" to="/">Home</Link> {/* Use Link */}
          </li>
          <li className={`nav-item ${location.pathname === "/about" ? "active" : ""}`}>
            <Link className="nav-link" to="/about">About Me</Link> {/* Use Link */}
          </li>
          <li className={`nav-item ${location.pathname === "/projects" ? "active" : ""}`}>
            <Link className="nav-link" to="/projects">My Work</Link> {/* Use Link */}
          </li>
          <li className={`nav-item ${location.pathname === "/skills" ? "active" : ""}`}>
            <Link className="nav-link" to="/skills">My Skills</Link> {/* Use Link */}
          </li>
          <li className={`nav-item ${location.pathname === "/contact" ? "active" : ""}`}>
            <Link className="nav-link" to="/contact">Contact Me</Link> {/* Use Link */}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
