import styled from "styled-components";

export const HeroStyled = styled.div`
  picture.hero {
    position: absolute;
    width: 100%;
    object-fit: cover;
    overflow: hidden;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    source {
      width: 100%;
      position: absolute;
    }
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    .desktop-hero {
      position: absolute;
      width: 100%;
      min-height:800px;
      max-height: 800px;
      overflow: hidden;
    }
    .desktop-hero-left {
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      min-height:800px;
      max-height: 800px;
      background-color: var(--almost-black);
      overflow: hidden;
    }
    .desktop-hero-right {
      position: absolute;
      top: 0;
      right: 0;
      width: 50%;
      min-height:800px;
      max-height: 800px;
      background-color: var(--white);
      overflow: hidden;
    }

    picture {
      position: absolute;
      top: 0;
      left: 25%;
      width: 50%;
      overflow: hidden;
      min-height:800px;
      max-height: 800px;
    }
  }
`;
