import styled from "styled-components";

export const HeroStyled = styled.div`
  picture.hero {
    position: absolute;
    width: 100vw;
    object-fit: cover;
    overflow: hidden;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    source {
      width: 200vw;
      position: absolute;
    }
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    .desktop-hero {
      position: absolute;
      width: 100vw;
      height: 800px;
    }
    .desktop-hero-left {
      position: absolute;
      top: 0;
      left: 0;
      width: 50vw;
      height: 800px;
      background-color: var(--almost-black);
    }
    .desktop-hero-right {
      position: absolute;
      top: 0;
      right: 0;
      width: 50vw;
      height: 800px;
      background-color: var(--white);
    }

    picture {
      position: absolute;
      top: 0;
      left: 25vw;
      width: 50vw;
      overflow: hidden;
      height: 100vh;
    }
  }
`;
