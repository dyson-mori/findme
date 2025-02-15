import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;

  height: 50px;
  /* min-height: 50px; */
  width: 100%;

  overflow: hidden;

  margin: 5px 0;

  ${({ theme }) => css`
    box-shadow: ${theme.box.shadow.default};
    /* border-radius: ${theme.border.small}; */
  `};

  button {
    display: flex;

    border: 0;

    background-color: #fff;

    align-items: center;
    justify-content: center;

    min-width: 50px;
    height: 50px;
  };

  .show {
    display: block;
  };

  .hide {
    display: none;
  };

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
`;

export const ContainerIcon = styled.div`
  min-width: 50px;
  height: 50px;
  background-color: #fff;

  svg {
    position: relative;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${({ theme }) => css`
      stroke: ${theme.colors.primary};
    `}
  };
`;

export const InputTextStyled = styled.input`
  border: 0;
  outline: 0;

  width: 100%;
`;