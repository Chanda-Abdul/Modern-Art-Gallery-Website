import React from "react";
import { HeroStyled } from "./styles/Hero.styled";

const Hero = () => {
  return (
    <HeroStyled>
      <div className="desktop-hero">
        <div className="desktop-hero-left"></div>
        <div className="desktop-hero-right"></div>
      </div>
      <div>
        <picture className="hero">
          <source
            media="(min-width:1275px)"
            srcSet="./images/desktop/image-hero.jpg"
            className="hero"
          />
          <source
            media="(min-width:768px)"
            srcSet="./images/tablet/image-hero.jpg"
            className="hero"
          />
          <img src="./images/mobile/image-hero.jpg" alt="hero" />
        </picture>
      </div>
    </HeroStyled>
  );
};

export default Hero;
