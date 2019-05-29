import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <Link className="navbar-brand" to="/">
      <img src = "./images/logoclear.png" id="headerlogo" width ="100" alt="logo" />
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/landing"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/userprofile"
              className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}
            >
              PROFILE
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
            >
              SEARCH 
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link
              to="/about"
              className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
            >
              ABOUT
            </Link>
            </li> */}
            <li className="nav-item">
            <Link
              to="/upload"
              className={window.location.pathname === "/upload" ? "nav-link active" : "nav-link"}
            >
              UPLOAD
            </Link>
            </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
