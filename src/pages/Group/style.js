import styled from "styled-components";

export const Container = styled.main`
  margin: 65px 15px 0 10px;

  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    .buttonBox {
      button {
        padding: 0;
        width: 70px;
        height: 35px;
        font-weight: 500;
        margin: 5px;
        font-size: 14px;
      }
    }
  }

  .title {
    h1 {
      font-family: Inter;
      font-style: normal;
      font-weight: 600;
      font-size: 28px;
      line-height: 34px;
      letter-spacing: -0.017em;
      color: var(--color-title);
      margin-bottom: 10px;
    }

    p {
      font-weight: normal;
      font-size: 12px;
      line-height: 15px;
      letter-spacing: -0.017em;
      color: var(--color-text);
      width: max-content;
      max-width: 80%;
    }
  }
  .group {
    background-color: var(--color-secondary);
    color: var(--white);
  }

  .atividade {
    background-color: var(--color-tertiary);
    color: var(--white);
  }

  .meta {
    background-color: var(--color-quaternary);
    color: var(--white);
  }

  input {
    width: 100%;
  }
`;

export const ActivitiesTitle = styled.div`
  width: max-content;
  width: 100%;
  height: 51px;
  background-color: var(--color-tertiary);
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 10px;
  border-radius: 5px;

  h4 {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.017em;
    color: var(--white);
  }
`;

export const ActivitiesContent = styled.div`
  width: max-content;
  width: 100%;
  background: var(--gray-2);
  padding: 10px;
  margin: 5px 0;

  p {
    margin: 10px 0;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.017em;
    color: var(--color-text);
  }
`;

export const GoalsTitle = styled.div`
  width: max-content;
  width: 100%;
  height: 51px;
  background-color: var(--color-quaternary);
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 10px;
  border-radius: 5px;

  h4 {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.017em;
    color: var(--white);
  }
`;

export const GoalsContent = styled.div`
  width: max-content;
  width: 100%;
  background: var(--gray-2);
  padding: 10px;
  margin: 5px 0;

  p {
    margin: 10px 0;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.017em;
    color: var(--color-text);
  }
`;

export const EditDivButton = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;
