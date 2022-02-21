import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: ${({ bgcolor }) => bgcolor || "var(--almost-black)"};
  color: ${({ color }) => color || "var(--white)"};
  width: 100vw;
  margin: 0 0;
  padding: 5rem 2rem 5rem 2rem;
  bottom: 0;

  & h2 {
    color: ${({ color }) => color || "var(--white)"};
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.35rem;
    width: 40vw;
    padding: 2rem 1rem 1rem 1rem;
  }

  & p {
    color: ${({ color }) => color || "var(--white)"};
    font-size: 1rem;
    line-height: 1.75rem;
    width: 90vw;
    margin: 0;
    padding: 1rem 2rem 2rem 1rem;
  }

  .footer-social-icons {
    margin: 0 0 2rem 0;
    padding: 0 1rem 0 1rem;
    color: ${({ color }) => color};
    height: 40rem;
  }

  &.footer-social-icons:hover,
  &.footer-social-icons:active {
    color: ${({ activeColor }) => activeColor};
  }

  @media (min-width: ${({ theme }) => theme.tablet}) {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: start;
      margin:0;
    
    & h2 {
      width: 20%;
      padding: 0 1rem;
      
    }

    & p {
      width: 40%;
      padding: 0 1rem;
      margin-top:0;
    }

    & .social-icons {
      width: 20vw;
      padding: 0 1rem;
    }
    .footer-social-icons {
      padding: 0 0 0 1rem;
    }
  }
`;
