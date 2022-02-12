import React from "react";
import arrowRight from "../images/icon-arrow-right.svg";

const LocationButton = () => {
  return (
    <button className="btn-right">
      <span className="btn-title">Our Location</span>
      <span className="btn-arrow">
        <img src={arrowRight} alt="icon-arrow-right" /> 
      </span>
    </button>
  );
};

export default LocationButton;
