import styled from "styled-components";

export const Container = styled.main`
  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100%;

  form {
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: calc(100% / 3);
  };

  .row {
    display: flex;

    width: 100%;
  };
`;