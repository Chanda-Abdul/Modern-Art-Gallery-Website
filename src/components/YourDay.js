import React from "react";
import firstGalleryImageMobile from "../images/mobile/image-grid-1@2x.jpg";
import firstGalleryImageDesktop from "../images/desktop/image-grid-1@2x.jpg";

const YourDay = () => {
  return (
    <div class="your-day">
      <picture className="your-day-image">
        <source media="(min-width:768px)" srcSet={firstGalleryImageDesktop} />
        <img
          src={firstGalleryImageMobile}
          className="your-day-image-mobile"
          alt="art-gallery"
        />
      </picture>
      <div className="your-day-text">
        <h2>Your day at the gallery</h2>
        <p>
          Wander through our distinct collections and find new insights about
          our artists. Dive into the details of their creative process.
        </p>
      </div>
    </div>
  );
};

export default YourDay;
