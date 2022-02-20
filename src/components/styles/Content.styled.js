import styled from "styled-components";

export const ContentStyled = styled.div`
  @media (min-width: ${({ theme }) => theme.mobile}) {
    .your-day {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 1rem;
    }

    .your-day-image {
      width: 90vw;
    }
    .inspo-text {
      width: 90vw;
      margin: 1rem 1rem 8rem 1rem;
     
    }

    .inspo-text p, .inspo-text h2 {
      margin: 1rem;
      padding: 1rem;
    }

    .inspo-image-second,
    .inspo-image-third {
      width: 90vw;
      margin: 0.5rem 1rem;
      height: auto;
    }

    .inspo-text {
      width: 90vw;
      padding: 1rem 0;
    }
  }

  @media (min-width: ${({ theme }) => theme.tablet}) {
    .your-day {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      margin: 3rem 1rem 0 1rem;
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
      width: 55vw;
      height: 100%;
    }

    .tablet-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .inspo-image-third,
    .inspo-text {
      width: 34vw;
    }
    .inspo-text {
      margin: 0;
      height: 100%;
      padding: 2rem ;
    }
    .inspo-text p, .inspo-text h2 {
      margin: 1rem 0;
      padding: 1rem 0;
    }
  }
`;
