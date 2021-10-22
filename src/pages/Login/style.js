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
    margin: 15px 0 15px 0;
  }

  span {
    font-style: normal;
    letter-spacing: -0.017em;
    color: var(--color-text);
    text-align: center;
    color: #b2b2b2;
    font-size: 12px;
    font-weight: 700;
  }
`;
