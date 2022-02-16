import React from "react";
import { Flex } from "./styles/Flex.styled";

const YourDay = () => {
  return (
    <Flex>
    <div class="your-day">
      <picture className="your-day-image">
        <source media="(min-width:768px)" srcSet="./images/desktop/image-grid-1@2x.jpg" />
        <img
          src="./images/mobile/image-grid-1@2x.jpg"
          className="your-day-image-mobile"
          alt="art-gallery"
        />
      </picture>
      <div className="your-day-text">
        <h2 className="title">Your day at the gallery</h2>
        <p className="byline">
          Wander through our distinct collections and find new insights about
          our artists. Dive into the details of their creative process.
        </p>
      </div>
    </div>
    </Flex>
  );
};

export default YourDay;
