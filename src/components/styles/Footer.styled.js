import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: ${({ bgcolor }) => bgcolor || "var(--almost-black)"};
  color: ${({ color }) => color || "var(--white)"} ;
  margin: 0 0 0 0;
  padding: 0 1rem 4rem 1rem;

  & h4 {
    font-size: 1.5rem;
    line-height: 1.35rem;
    width: 40vw;
    padding: 4rem 1rem 1rem 0rem;
  }

  & p {
    color: ${({ color }) => color || "var(--white)"};
    font-size: 1rem;
    line-height: 1.75rem;
    width: 80vw;
    margin: 0;
    padding: 2rem 0;
  }

  .footer-social-icons {
    margin:0;
    padding: 0 1.5rem 0 0rem;
    color: "var(--white)";
    height:40rem;
    
    
  }
 a .footer-social-icons {

  
}


  // @media (max-width: ${({ theme }) => theme.mobile}) {

  // }



  
`;
