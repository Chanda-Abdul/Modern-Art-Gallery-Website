import styled from "styled-components";

export const ButtonStyled = styled.button`
  border: none;
  display: flex;
  margin: 2rem 1rem;
  padding: 0rem;
  flex-direction: row;
  margin-right: auto;
  text-transform: uppercase;
  cursor: pointer;
  color: ${({ textcolor }) => textcolor || "var(--white)"};
  height: 3rem;
  max-width: 60%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }

  & .btn-title {
    width: 90%;
    padding: 1rem;
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

  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
`;

// @mixin button {
//   @include body-s;
//

//
//   width: fit-content;
//
//   color: ;
//   border: none;
//   // margin: 1rem 1rem 4rem 1rem;
// }

// .btn-right,
// .btn-right:hover {
//   @include button;
//   // height: 4rem;

// }

// .btn-right .btn-title {
//   width: fit-content;
//   margin: 0;
//   padding: 2rem 2rem;
//   background-color: var(--almost-black);
// }

// .btn-right .btn-arrow {
//   background-color: var(--gold);
//   // width: fit-content;
//   align-items: center;
//   // margin: 1rem;
//   padding: 1rem;
//   color: var(--white);
// }

// .btn-right:hover .btn-title {
//   background-color: var(--gold);
// }

// .btn-right.btn-right:hover .btn-arrow {
//   background-color: var(--black);
// }

// .btn-right:hover {
//   @include button;
//   background-image: linear-gradient(
//     to right,
//     var(--gold) 80%,
//     var(--almost-black) 20%
//   );
// }

// .btn-left {
//   @include button;
//   background-image: linear-gradient(
//     to left,
//     var(--almost-black) 80%,
//     var(--gold) 20%
//   );
// }

// .btn-left:hover {
//   @include button;
//   background-image: linear-gradient(
//     to left,
//     var(--gold) 80%,
//     var(--almost-black) 20%
//   );
// }
// .btn-left {
//   @include button;
// }

// .btn-left:hover {
//   @include button;
// }
