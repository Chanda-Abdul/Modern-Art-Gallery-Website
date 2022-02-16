import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  & > div,
  & > ul {
    flex: 1;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    // margin:0;
    padding: 0 .5rem;

    p {
      margin: 1rem 1rem;
  padding:  1rem 1rem 1rem 0;
  width: auto;
    }
  }
`;
