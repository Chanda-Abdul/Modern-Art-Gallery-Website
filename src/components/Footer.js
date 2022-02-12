import React from "react";
import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
// import pic from '../images/'
import twitter from "../images/icon-twitter.svg";

const Footer = () => {
  return (
    <footer>
      <h4>Modern Art Gallery</h4>
      <p class="contact-info">
        The Modern Art Gallery is free to all visitors and open seven days a
        week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
      </p>

      <div class="social-icons">
        <a href="www.facebook.com" class="footer-social-icons">
          <img src={facebook} alt="facebook-icon" />
        </a>
        <a href="www.instagram.com" class="footer-social-icons">
          <img src={instagram} alt="instagram-icon" />
        </a>
        <a href="www.twitter.com" class="footer-social-icons">
          <img src={twitter} alt="twitter-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
