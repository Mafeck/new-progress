import styled from "styled-components";

export const ContainerAppBar = styled.div`
  background: #ededed;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: auto;
  bottom: 0;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100px;
  border-radius: 4px;
  padding: 4px;
  cursor: pointer;
  background: ${(props) =>
    props.selected ? `var(--color-primary)` : `transparent`};
  color: ${(props) => (props.selected ? `var(--white)` : `#C4C4C4`)};

  p {
    padding: 5px;
  }
`;

export const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;
