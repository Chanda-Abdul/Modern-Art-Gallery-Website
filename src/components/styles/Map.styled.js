import styled from "styled-components";

export const MapStyled = styled.div`
#map { 
    height: 180px;
 }
 
.locate {
  position: relative;
  height: 75vh;
}
  position: relative;
  padding-bottom: 0;

  .locate {
    z-index: 0;
  }
  .leaflet-top {
    display: none;
  }
  .popup {
    background: rgba(0, 0, 0, 0) !important;
    border: none !important;
    font-size: 1.5rem;
    box-shadow: none !important;
    margin-top: -0.5rem;
  }

  .home-btn {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0 0 0 0 !important;
  }

  @media (min-width: ${({ theme }) => theme.tablet}) {
    .home-btn {
      left: 2rem;
      margin: 0 0 0 0 !important;
    }
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    .home-btn {
      left: 5rem;
      margin: 0 0 0 0 !important;
    }
  }
`;
