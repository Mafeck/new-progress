import styled from "styled-components";

export const ContainerGroup = styled.div`
  margin: 20px 0 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .group {
    background-color: var(--color-secondary);
    color: var(--white);
  }

  .atividade {
    background-color: var(--color-tertiary);
    color: var(--white);
  }
  .groupButtons {
    display: flex;
    justify-content: center;
  }

  .meta {
    background-color: var(--color-quaternary);
    color: var(--white);
  }
  #select {
    width: 100%;
    height: 50px;
    margin: 5px 0 13px;
    border-radius: 5px;
    border: 1px solid var(--gray-1);
    padding: 10px;
    background-color: var(--white);
  }

  .filterGroups {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 12px;
    letter-spacing: -0.017em;
    text-align: start;
  }
`;

export const GroupItensButton = styled.button`
  margin: 50px 10px 10px;
  width: 42%;
  height: 77px;
  background: ${(props) =>
    props.colorSchema ? "var( --color-tertiary)" : "var(--color-quaternary)"};
  color: var(--white);
  border-radius: 5px;
  border: none;
  padding-left: 10px;

  h4 {
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
    letter-spacing: -0.017em;
    text-align: start;
    margin-bottom: 3px;
  }
  p {
    font-size: 10px;
    font-weight: 500;
    line-height: 12px;
    letter-spacing: -0.017em;
    text-align: start;
  }
`;

export const InputDate = styled.input`
  width: 100%;
  height: 50px;
  margin: 5px 0 13px;
  border-radius: 5px;
  border: 1px solid var(--gray-1);
  padding: 10px;
`;

export const MainContainer = styled.div`
  @media (min-width: 506px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerGroups = styled.div`
  @media (min-width: 425px) {
    display: flex;
    flex-wrap: wrap;
    max-width: 1080px;
    align-items: center;
  }
`;
