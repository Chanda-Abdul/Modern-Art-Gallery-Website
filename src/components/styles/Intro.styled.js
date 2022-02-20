import styled from "styled-components";

export const IntroStyled = styled.div`
  .intro {
      position: relative;
      margin: 0rem 0 0rem 0;
      padding: 35vh 0 0rem 0;
   }

    @media (min-width: ${({ theme }) => theme.tablet}) {
      .intro {
        position: relative;
        width: 60vw;
        right: -45%;
        margin: 10rem 20% 10rem 0;
        padding: 0rem 1rem 1rem 1rem;
     }
    }
      @media (min-width: ${({ theme }) => theme.desktop}) {
        picture {
          width: 100vw;
          height: 60vh;
          position: absolute;
          top: -20%;
          overflow: hidden;
        }

        .intro {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          width: 55vw;
          position: relative;
          // top: -10%;
          margin: 0rem 0 0rem 0;
          padding: 40vh 0 10rem 0;
       }

       .title-text{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 25vw;
        height: auto;
       }
      }
  }
`;
