import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonStyled } from "./styles/Button.styled";

function LocationButton() {
  let navigate = useNavigate();

  return (
    <ButtonStyled
      bgtext="var(--almost-black)"
      bgarrow="var(--gold)"
      onClick={() => {
        navigate("/location");
      }}
    >
      <span className="btn-title">Our Location</span>
      <span className="btn-arrow">
        <img src="./images/icon-arrow-right.svg" alt="icon-arrow-right" />
      </span>
    </ButtonStyled>
  );
}

export default LocationButton;
