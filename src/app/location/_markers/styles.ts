import styled, { css } from "styled-components";

import { AdvancedMarker } from "@vis.gl/react-google-maps";

export const Container = styled(AdvancedMarker)`
  position: relative;

  display: flex;

  justify-content: center;

  margin-bottom: 10px;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  border-radius: 6px;

  span {
    position: absolute;

    width: 40px;
    height: 40px;

    background-color: #f1f1f1;

    border-radius: 3px;

    bottom: -5px;

    transform: rotate(45deg);
  };
  
  .moving-item {
    position: absolute;

    width: 100%;
    padding: 5px;

    top: -30px;
    transition: transform 0.3s ease-in-out;

    border-radius: 3px;
    
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: #fff;

    transition: .1s;
  };

  .moving-item:hover {
    ${({ theme }) => css`
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
      font-weight: 600;
    `}
  }
`;