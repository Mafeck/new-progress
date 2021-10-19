import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  h2 {
    color: var(--color-title);
    margin: 15px 0px;
    text-align: center;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;

  button {
    width: 100%;
  }

  span {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    font-style: normal;
    letter-spacing: -0.017em;
    color: var(--color-text);
    text-align: center;


  }
`;