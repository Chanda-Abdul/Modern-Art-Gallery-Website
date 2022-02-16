import React from "react";
import { Flex } from "./styles/Flex.styled";
import { FooterStyled } from "./styles/Footer.styled";

const Footer = (props) => {
  return (
    <FooterStyled bgcolor={props.bgcolor} color={props.color}>
      <Flex>
    <footer>
      <h4>Modern Art Gallery</h4>
      <p class="contact-info">
        The Modern Art Gallery is free to all visitors and open seven days a
        week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
      </p>

      <div class="social-icons">
        <a href="https://www.facebook.com" class="footer-social-icons">
          <img src="./images/icon-facebook.svg" alt="facebook-icon" currentColor={props.color} />
        </a>
        <a href="https://www.instagram.com" class="footer-social-icons">
          <img src="./images/icon-instagram.svg" alt="instagram-icon" currentColor={props.color} />
        </a>
        <a href="https://www.twitter.com" class="footer-social-icons">
          <img src="./images/icon-twitter.svg" alt="twitter-icon" currentColor={props.color}/>
        </a>
      </div>
    </footer>
    </Flex>
    </FooterStyled>
  );
};

export default Footer;
