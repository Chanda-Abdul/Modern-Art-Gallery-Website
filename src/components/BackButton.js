import React from "react";
import arrowLeft from "../images/icon-arrow-left.svg";

const BackButton = () => {
  return (
    <button className="btn-left home-btn">
     <span className="btn-arrow">
        <img src={arrowLeft} alt="icon-arrow-left" /> 
      </span>
       <span className="btn-title">Back to Home</span>
      
    </button>
  );
};

export default BackButton;
