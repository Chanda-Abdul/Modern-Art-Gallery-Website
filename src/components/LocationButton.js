import React from "react";

import { ButtonStyled } from "./styles/Button.styled";

function LocationButton() {
  return (
    <ButtonStyled bgtext='var(--almost-black)' bgarrow='var(--gold)'>
      <span className="btn-title">Our Location</span>
      <span className="btn-arrow">
        <img src="./images/icon-arrow-right.svg" alt="icon-arrow-right" /> 
      </span>
      </ButtonStyled>
  );
};

export default LocationButton;
