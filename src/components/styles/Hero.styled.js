import styled from "styled-components";

export const HeroStyled = styled.div`
     picture {
      position: absolute;
      overflow: hidden;
    }
 
    @media (max-width: ${({ theme }) => theme.tablet}) {
      source{
        width: 200vw;
        
        position: absolute;
        
      }
    }
      @media (min-width: ${({ theme }) => theme.desktop}) {
        .desktop-hero-add {
          position: absolute;
          top: 0;
          left:0;
          width: 50vw;
          height: 100vh;
          background-color: var(--almost-black);
        }
        
        picture {
        
         
          position: absolute;
          right: 25%;
          overflow: hidden;
        }
      }


  }
`;
