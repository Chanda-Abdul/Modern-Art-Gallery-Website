import styled from "styled-components";

export const LocationStyled = styled.div`
  .location-text {
    position: relative;
    background-color: var(--almost-black);
    padding: 2rem 1rem;
    color: var(--white);
  }

  .location-text h2 {
    margin: 2rem 0rem;
    color: var(--white);
  }

  .location-text ul {
    margin: 2rem 0rem;
    list-style: none;
  }

  .location-text p {
    color: var(--white);
  }

  .location-text h4 {
    color: var(--gold);
    margin: 2rem 0rem;
  }

  .orange {
    background-color: var(--gold);
    color: var(--almost-black);
  }

  @media (min-width: ${({ theme }) => theme.tablet}) {
    .location-text {
      display: flex;
      flex-direction: row;
      padding: 3rem 2rem;
    }

    .location-info {
      width: 60vw;
    }
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    .location-text {
      justify-content: space-around;
    }
    .location-text h2 {
      width: 15vw;
    }
    .location-info {
      width: 50vw;
    }
  }
`;
