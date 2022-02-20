import styled from "styled-components";

export const LocationStyled = styled.div`

 

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
    .location-text h2{
      width: 15vw;
    }
    .location-info {
      width: 50vw;
    }
  }

`;
