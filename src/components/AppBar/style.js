import styled from "styled-components";

export const ContainerAppBar = styled.div`
  background: #ededed;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: auto;
  bottom: 0;
  left: 0;

  @media (min-width: 426px) {
    bottom: 300px;
    left: 50%;
    width: 300px;
    height: auto;
    padding: 15px;
    flex-direction: column;
    position: static;
    border-radius: 4px;
    box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
      0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100px;
  border-radius: 4px;
  padding: 4px;
  margin: 15px;
  cursor: pointer;
  background: ${(props) =>
    props.selected ? `var(--color-primary)` : `transparent`};
  color: ${(props) => (props.selected ? `var(--white)` : `#C4C4C4`)};

  @media (min-width: 426px) {
    width: 100%;
    justify-content: flex-start;
  }

  p {
    padding: 5px;
  }
`;

export const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;
