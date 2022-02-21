import styled from "styled-components";

export const ContentStyled = styled.div`
  @media (min-width: ${({ theme }) => theme.mobile}) {
    .your-day {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 1rem;
      padding: 1rem;
    }

    .your-day-image {
      width: 95vw;
      height: auto;
      margin: 0;
    }

    .inspo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 2rem 0;
  
    }

  
    .your-day-text {
      width: 95vw;
      margin: 1rem 1rem 1rem 1rem;
    }

    .inspo-text p,
    .inspo-text h2 {
      margin: 2rem;
      padding: 2rem;
    }

    .inspo-image-second,
    .inspo-image-third {
      width: 95vw;
      margin: 1rem 0;
      height: auto;
    }

    .inspo-text {
      width: 95vw;
      background-color: var(--almost-black);
    }
    .inspo-text h2 {
      margin: 0;
      padding: 5rem 2rem 1rem 2rem;
      color: var(--white);
    }
    .inspo-text p {
      margin: 0;
      padding: 1rem 2rem 5rem 2rem;
      color: var(--white);
    }
  }

  @media (min-width: ${({ theme }) => theme.tablet}) {
    .your-day {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: start;
      margin: 5rem 1rem 0 1rem;
    }
    .your-day-image {
      width: 58vw;
    }

    .your-day-text {
      width: 34vw;
    }

    .inspo {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 0 1rem 6rem 1rem;
    }

    .inspo-image-second {
      width: 58vw;
      height: 100%;
    }

    .tablet-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: start;
    }
    .inspo-image-third,
    .inspo-text {
      width: 34vw;
    }
    .inspo-text {
      margin: 0;
      height: 100%;
      padding: 2rem;
    }
    .inspo-text p,
    .inspo-text h2 {
      margin: 1rem 0;
      padding: 1rem 0;
    }
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    .your-day {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-around;
      align-items: center;
      margin: 100vh 2rem 0 2rem;
      width: 100vw;
      padding: 10rem 0 1rem 0;
    }

    .your-day-image {
      width: 50vw;
    }

    .your-day-text {
      width: 30vw;
    }
    .inspo {
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 100vw;
      margin: 1rem 2rem 6rem 2rem;
    }

    .inspo-image-second {
      width: 50vw;
      height: 100%;
      margin: 0 2rem;
    }

    .tablet-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .inspo-image-third,
    .inspo-text {
      width: 35vw;
      margin: 0 0 1rem 0;
    }
    .inspo-text {
      height: 100%;
      padding: 2rem;
    }
    .inspo-text p,
    .inspo-text h2 {
      margin: 1rem 0;
      padding: 1rem 0;
    }
  }
`;
