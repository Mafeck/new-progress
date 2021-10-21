import styled from "styled-components";

export const ContainerGroup = styled.div`
  margin: 30px 0;

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
