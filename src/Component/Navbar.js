import React, { useState } from "react";
import "./Navbar.css";
import { CiSearch } from "react-icons/ci";
import logo from '../assets/image.png'
import { RiArrowDropDownLine } from "react-icons/ri";


const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} className="logo-image" alt="Logo" />
      </div>
      <div class="hamburger" onClick={handleMenuOpen}>
        ☰
      </div>
      <ul className={`nav-links ${openMenu ? "show" : ""}`}>
        <li className="dropdown">
          Categories <RiArrowDropDownLine className="dropdownicon1" />
          <ul className="dropdown-content">
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </li>
        <li className="dropdown">
          boAt Personalisation
        </li>
        <li className="dropdown">
          Corporate Orders
        </li>
        <li className="dropdown">
          More <RiArrowDropDownLine className="dropdownicon2" />
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
