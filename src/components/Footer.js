import React from "react";
import { FooterStyled } from "./styles/Footer.styled";
import { ReactComponent as FacebookIcon } from "../../src/images/icon-facebook.svg";
import { ReactComponent as InstagramIcon } from "../../src/images/icon-instagram.svg";
import { ReactComponent as TwitterIcon } from "../../src/images/icon-twitter.svg";

const Footer = (props) => {
  return (
    <FooterStyled bgcolor={props.bgcolor} color={props.color} activecolor={props.activeColor}>
   
        <footer>
          <h4>Modern Art Gallery</h4>
          <p class="contact-info">
            The Modern Art Gallery is free to all visitors and open seven days a
            week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
          </p>

          <div class="social-icons">
            <a href="https://www.facebook.com" class="footer-social-icons">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com" class="footer-social-icons">
              <InstagramIcon />{" "}
            </a>
            <a href="https://www.twitter.com" class="footer-social-icons">
              <TwitterIcon />{" "}
            </a>
          </div>
        </footer>
    
    </FooterStyled>
  );
};

export default Footer;
