import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  & > div,
  & > ul {
    flex: 1;
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    flex-direction: row;
    justify-content: baseline;

    picture {
      margin: 1rem;
    }
    h1,
    h2 {
      margin: 1rem;
      padding: 1rem 1rem 0 0;
      width: auto;
    }
    p {
      margin: 1rem 1rem;
      padding: 1rem 1rem 1rem 0;
      width: auto;
    }

    button {
      margin: 1rem 1rem 6rem 1rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;

    h1,
    h2 {
      margin: 1rem;
      padding: 1rem 1rem 0 0;
      width: auto;
    }
    p {
      margin: 1rem 1rem;
      padding: 1rem 1rem 1rem 0;
      width: auto;
    }
  }
`;
