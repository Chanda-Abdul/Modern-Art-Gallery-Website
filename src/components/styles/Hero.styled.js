import styled from "styled-components";

export const HeroStyled = styled.div`

    width: 100vw;
    height: 50vh;
  
    overflow: hidden;

& img {
 postion: absolute;
 top: 50%;
    
   

  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    
    
  }
`;
