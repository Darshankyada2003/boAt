import React from "react";
import "./Navbar.css";
import { CiSearch } from "react-icons/ci";
import logo from '../assets/Untitled.jpg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} className="logo-image" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li className="dropdown">
          Categories
          <ul className="dropdown-content">
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </li>
        <li className="dropdown">
          boAt Personalisation
          <ul className="dropdown-content">
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </li>
        <li className="dropdown">
          Corporate Orders
          <ul className="dropdown-content">
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </li>
        <li className="dropdown">
          More
          <ul className="dropdown-content">
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </li>
      </ul>

      <div className="search-cart">
        <input type="text" placeholder="Search 'Speakers'" className="search-box" />
        <CiSearch className="search_icon" />
        <span className="icon">👤</span>
        <span className="icon">🛒</span>
      </div>
    </nav>
  );
};

export default Navbar;
