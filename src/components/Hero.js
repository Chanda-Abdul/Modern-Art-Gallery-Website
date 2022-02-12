import React from "react";
import heroDesktop from "../images/desktop/image-hero.jpg";
import heroMobile from "../images/desktop/image-hero.jpg";

const Hero = () => {
  return (
    <div>
      <picture className="hero">
        <source media="(min-width:768px)" srcSet={heroDesktop} />
        <img
          src={heroMobile}
          className="hero-mobile"
          alt="hero"
        />
      </picture>
    </div>
  );
};

export default Hero;
