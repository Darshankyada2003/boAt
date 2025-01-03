import React from "react";
import "./Footer.css";
import logo from '../../assets/Screenshot 2025-01-03 122420.png'
import { AiOutlineRightCircle } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <img src={logo} className="footerimg" alt="" />
                    <p className="footer-subscription">Subscribe to our email alerts!</p>
                    <div className="footer-input-container">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="footer-input"
                        />
                        <AiOutlineRightCircle className="EnterEmailIcon" />
                    </div>
                </div>
                <div className="footer-right">
                    <div className="footer-column">
                        <h4>Shop</h4>
                        <ul>
                            <li>True Wireless Earbuds</li>
                            <li>Wired Headphones</li>
                            <li>Home Audio</li>
                            <li>Smart Watches</li>
                            <li>Misfit Trimmers</li>
                            <li>Wireless Headphones</li>
                            <li>Wireless Speakers</li>
                            <li>Mobile Accessories</li>
                            <li>TRebel</li>
                            <li>Refer & Earn</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Help</h4>
                        <ul>
                            <li>Track Your Order</li>
                            <li>Warranty & Support</li>
                            <li>Return Policy</li>
                            <li>Service Centers</li>
                            <li>Bulk Orders</li>
                            <li>Why Buy Direct</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Company</h4>
                        <ul>
                            <li>About boAt</li>
                            <li>News</li>
                            <li>Read Our Blog</li>
                            <li>Careers</li>
                            <li>Security</li>
                            <li>Investor Relations</li>
                            <li>Social Responsibility</li>
                            <li>Warranty Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="footer-top">
                    <div className="footer-social-icons">
                        <p className="footer-social-title">Let's get social</p>
                        <FaFacebookF className="footer-icon" />
                        <FaTwitter className="footer-icon" />
                        <FaInstagram className="footer-icon" />
                        <FaYoutube className="footer-icon" />
                        <FaLinkedin className="footer-icon" />
                    </div>
                </div>

                <div className="footer-middle">
                    <p className="footer-links">
                        <a href="">Privacy Policy</a> · <a href="">Terms & Conditions</a>
                    </p>
                </div>

                <div className="footer-bottom">
                    <p>© 2025 Imagine Marketing Limited. All Rights Reserved.</p>
                    <p>
                        For queries contact us: Manager, Imagine Marketing Limited Unit no. 204 & 205, 2nd floor, D-wing & E-wing,
                        Corporate Avenue, Andheri Ghatkopar Link Road, Mumbai, Maharashtra-400093, India
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
