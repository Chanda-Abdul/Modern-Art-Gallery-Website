import React from "react";
import { HeroStyled } from "./styles/Hero.styled";

const Hero = () => {
  return (
    
    <div>
      <HeroStyled>
      <picture className="hero">
        <source media="(min-width:768px)" srcSet="./images/desktop/image-hero.jpg" />
        <img
          src="./images/desktop/image-hero.jpg"
          className="hero-mobile"
          alt="hero"
        />
      </picture>
      </HeroStyled>
      </div>
  
  );
};

export default Hero;
