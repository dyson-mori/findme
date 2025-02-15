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

export const LoginWith = styled.div`
  display: flex;

  align-items: center;

  width: calc(100% / 5);

  margin: 10px;

  p {
    width: 250px;
    font-size: 13px;
    color: #909090;
  }

  span {
    width: 100%;
    height: 1px;
    background-color: #dedede;
    margin: 0 10px;
  }
`;