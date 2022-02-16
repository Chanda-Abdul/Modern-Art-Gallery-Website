import React from "react";
import {ButtonStyled} from "./styles/Button.styled"

const BackButton = () => {
  return (
    <ButtonStyled bgtext='var(--gold)' bgarrow='var(--almost-black)' className="home-btn">
    
     <span className="btn-arrow">
        <img src="./images/icon-arrow-left.svg" alt="icon-arrow-left" /> 
      </span>
       <span className="btn-title">Back to Home</span>
       </ButtonStyled>
  );
};

export default BackButton;
