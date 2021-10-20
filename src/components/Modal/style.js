import styled, { keyframes } from "styled-components";

export const LargeContainerModal = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EffectContainerModal = keyframes`
0%{
  opacity: 0;
  transform: translateY(-10%)
}

100%{
  opacity: 1;
  transform: translateY(0%)}
`;

export const ContainerModal = styled.div`
  background-color: #fff;
  width: 600px;
  border-radius: 5px;
  animation: ${EffectContainerModal} 0.6s;
  @media (max-width: 990px) {
    width: 95%;
  }
`;

export const ContentModal = styled.div`
  display: flex;
  grid-gap: 2rem;
  align-content: center;
  align-items: flex-start;
  padding: 30px 10px;
  justify-content: space-around;
  flex-direction: column;
`;

export const Close = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  right: calc(-100% + 35px);
  top: 20px;
  cursor: pointer;
  display: flex;
  position: relative;
  align-items: center;

  &:before {
    content: " ";
    position: absolute;
    width: 2.5px;
    height: 24px;
    background-color: #c1c1c1;
    transform: rotate(45deg);
    transition: 0.6s ease;
  }

  &:after {
    content: " ";
    position: absolute;
    width: 2.5px;
    height: 24px;
    background-color: #c1c1c1;
    transform: rotate(-45deg);
    transition: 0.6s ease;
  }

  &:hover::after {
    background-color: #626262;
  }
  &:hover::before {
    background-color: #626262;
  }
`;
