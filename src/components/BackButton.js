import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonStyled } from "./styles/Button.styled";

const BackButton = () => {
  let navigate = useNavigate();

  return (
    <ButtonStyled
      bgtext="var(--gold)"
      bgarrow="var(--almost-black)"
      className="home-btn"
      onClick={() => {
        navigate("/");
      }}
    >
      <span className="btn-arrow">
        <img src="./images/icon-arrow-left.svg" alt="icon-arrow-left" />
      </span>
      <span className="btn-title">Back to Home</span>
    </ButtonStyled>
  );
};

export default BackButton;
