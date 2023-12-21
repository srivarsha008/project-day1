import React from "react";
import { Link } from "react-router-dom";
import "./navig.css";

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav1">
          <Link to="/" className="home">
            <span className="trek">trek</span>
            <br />
            <span className="trailblazer">trailblazer</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/plans" className="nav-link">
          Travel Planning
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          {isLoggedIn ? (
            <Link to="/profile" className="nav-link">
              Profile
            </Link>
          ) : (
            <Link to="/login" className="nav-link">
              Signin/Signup
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
