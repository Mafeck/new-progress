import styled, { keyframes } from "styled-components";

export const ModalLargeContainer = styled.div`
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

const ModalEffectContainer = keyframes`
0%{
  opacity: 0;
  transform: translateY(-10%)
}

100%{
  opacity: 1;
  transform: translateY(0%)}
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  width: 600px;
  border-radius: 5px;
  animation: ${ModalEffectContainer} 0.6s;
  @media (max-width: 990px) {
    width: 95%;
  }
`;

export const ModalHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  .pink {
    background-color: var(--color-quaternary);
  }
  .green {
    background-color: var(--color-secondary);
  }
`;

export const ModalContent = styled.div`
  display: flex;
  grid-gap: 2rem;
  align-content: center;
  align-items: flex-start;
  padding: 30px 10px;
  justify-content: space-around;
  flex-direction: column;
`;

export const ModalButtonClose = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap");
  background-color: transparent;
  outline: none;
  border: none;
  width: 40px;
  height: 20px;
  cursor: pointer;
  color: var(--white);

  &:after {
    content: "X";
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 20px;
    font-family: "Nunito", sans-serif;
    transition: 0.6s ease;
  }

  &:hover::after {
    background-color: #626262;
  }
  &:hover::before {
    background-color: #626262;
  }
`;
