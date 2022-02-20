import React from "react";
import { ContentStyled } from "./styles/Content.styled";

const Inspo = () => {
  return (
    <ContentStyled>
    <div className="inspo">
      <picture>
      <source
          media="(min-width:1275px)"
          srcSet="./images/desktop/image-grid-2@2x.jpg"
         />
        <source
          media="(min-width:768px)"
          srcSet="./images/tablet/image-grid-2@2x.jpg"
           />
        <img
          src="./images/mobile/image-grid-2@2x.jpg"
          className="inspo-image-second"
          alt="art-gallery"
        />
      </picture>
      
    
        <div className="tablet-container">
      <picture>
        <source
          media="(min-width:1275px)"
          srcSet="./images/desktop/image-grid-3@2x.jpg"
        />
        <source
          media="(min-width:768px)"
          srcSet="./images/tablet/image-grid-3@2x.jpg"
        />
        <img
          src={"./images/mobile/image-grid-3@2x.jpg"}
          className="inspo-image-third"
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
      
    </div>
    </ContentStyled>
  );
};

export default Inspo;
