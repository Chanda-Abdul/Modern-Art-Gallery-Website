import styled from "styled-components";

export const IntroStyled = styled.div`
  .intro {
    position: relative;
    margin: 0;
    padding: 35vh 0 0 0;
  }

  @media (min-width: ${({ theme }) => theme.tablet}) {
    .intro {
      position: relative;
      width: 50vw;
      right: -45%;
      margin: 5rem 2rem 1rem 0;
      padding: 0rem 1rem 1rem 1rem;
    }
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    .intro {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: start;
      width: 90%;
      position: absolute;
      padding: 5rem 0 5rem 11rem;
      left: 0%;
    }

    h1 {
      width: 40%;
      height: auto;
      color: var(--white);
      mix-blend-mode: difference;
      text-align: left;
    }

    .title-text {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 40%;
      height: auto;
    }
  }
`;
