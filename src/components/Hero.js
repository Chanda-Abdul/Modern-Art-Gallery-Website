import React from "react";
import { HeroStyled } from "./styles/Hero.styled";

const Hero = () => {
  return (
    <HeroStyled>
      <div className="desktop-hero-add">
      </div>
      <div >
        <picture className="hero">
          <source
            media="(min-width:900px)"
            srcSet="./images/desktop/image-hero.jpg"
            className="hero"
          />
          <source
            media="(min-width:675px)"
            srcSet="./images/tablet/image-hero.jpg"
            className="hero"
          />
          <img
            src="./images/mobile/image-hero.jpg"
          alt="hero"
          />
        </picture>
      </div>
     
    </HeroStyled>
  );
};

export default Hero;
