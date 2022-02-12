import React from "react";
import secondGalleryImageMobile from "../images/mobile/image-grid-2@2x.jpg";
import secondGalleryImageDesktop from "../images/desktop/image-grid-2@2x.jpg";
import thirdGalleryImageMobile from "../images/mobile/image-grid-3@2x.jpg";
import thirdGalleryImageDesktop from "../images/desktop/image-grid-3@2x.jpg";

const Inspo = () => {
  return (
    <div className="inpso">
      <picture className="inspo-image-second">
        <source media="(min-width:768px)" srcSet={secondGalleryImageDesktop} />
        <img
          src={secondGalleryImageMobile}
          className="inspo-image-second-mobile"
          alt="art-gallery"
        />
      </picture>
      <picture className="inspo-image-third">
        <source media="(min-width:768px)" srcSet={thirdGalleryImageDesktop} />
        <img
          src={thirdGalleryImageMobile}
          className="inspo-image-third-mobile"
          alt="art-gallery"
        />
      </picture>
      <div className="inspo-text">
        <h2>Come &amp; be inspired</h2>
        <p>
          We’re excited to welcome you to our gallery and see how our
          collections influence you.
        </p>
      </div>
    </div>
  );
};

export default Inspo;
