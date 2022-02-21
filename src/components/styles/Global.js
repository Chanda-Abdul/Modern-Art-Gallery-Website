import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
  }
 
img {
    max-width: 100%;
}

@media (max-width: ${({ theme }) => theme.mobile}) {
  font-size: 12px;
  
  h1 {
  color: var(--almost-black);
  margin: 2rem 1rem;
  
  }
  h2 {
    color: var(--almost-black);
    margin: 2rem 1rem;
    }

  p {
  color: var(--almost-grey);
  margin: 1rem 0;
  padding:  1rem 1rem 1rem 0;
  width: auto;
  }
}




`;

export default GlobalStyles;
