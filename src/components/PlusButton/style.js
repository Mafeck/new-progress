import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) =>
    props.greenSchema ? "var(--color-secondary)" : "var(--color-primary)"};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: none;
  color: var(--white);
  font-size: 25px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 80px;
  right: 20px;
`;
