import styled from "styled-components";

export const ButtonStyled = styled.button`
  border: none;
  display: flex;
  margin: 2rem 1rem;
  padding: 0rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  text-transform: uppercase;
  cursor: pointer;
  color: ${({ textcolor }) => textcolor || "var(--white)"};
  height: 3.5rem;
  max-width: 60%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }

  & .btn-title {
    width: 90%;
    padding: 1.25rem;
    height: 100%;
    background-color: ${({ bgtext }) => bgtext || "#000"};
  }
  & .btn-arrow {
    padding: 1rem;
    width: fit-content;
    height: 100%;
    background-color: ${({ bgarrow }) => bgarrow || "#000"};
  }

  &:hover .btn-title,
  &:active .btn-title {
    background-color: ${({ bgarrow }) => bgarrow || "#000"};
  }

  &:hover .btn-arrow,
  &:active .btn-arrow {
    background-color: ${({ bgtext }) => bgtext || "#000"};
  }


 
`;
