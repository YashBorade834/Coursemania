import React from "react";
import { Link } from "react-router-dom";
// import "./App.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
        <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <ul>
            <li><a href="#">Udemy Business</a></li>
            <li><a href="#">Tech On Udemy</a></li>
            <li><a href="#">Get The App</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <ul>
            <li><a href="#">Helps And Support</a></li>
            <li><a href="#">Privacy And Plicy</a></li>
          </ul>
        </div>
        <div className="footer-column">
        
        <div className="phone">
          <img src="src\assets\images\whatsapp.png" alt="phone" className="phonepic"/>
          <h3>+91 3456780909</h3>
          </div>
          <div className="mail">
          <img src="src\assets\images\gmail.png" alt="mail" className="mailpic"/>
          <h3>support@elearning.com</h3>
          </div>
          <a href='#'>
          <div className="insta">
          <img src="src\assets\images\instagram.png" alt="instagram" className="instapic"/>
          <h3>coursemania</h3>
          </div>
          </a>
          <a href='#'>
          <div className="linkedin">
          <img src="src\assets\images\linkedin.png" alt="linkedin" className="linkedinimg"/>
          <h3>coursemaniaXXXXX</h3>
          </div>
          </a>
          
        </div>
      </div>
      <p className="footer-bottom">© 2025 E-Learning Platform. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
