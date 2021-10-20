import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  .plusButton {
    position: fixed;
    bottom: 80px;
    right: 20px;
  }
`;

export const ModalEffect = keyframes`
  0%{
    opacity: 0;
    transform: translateY(-20%);
  }

  100%{
    opacity: 1;
    transform: translateY(0%);
  }
`;

export const Modal = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  z-index: 1;
`;

export const CreateHabit = styled.div`
  background: var(--white);
  width: 95%;
  height: 410px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;

  .main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .subTitle {
      width: 90%;
      display: inline-block;
      color: var(--color-text);
      margin-top: 10px;
      padding-left: 5px;
    }

    input {
      background: var(--gray-2);
      color: var(--color-text);
      font-size: 16px;
      width: 90%;
      height: 50px;
      border-radius: 5px;
      border: none;
      margin-top: 15px;
      padding: 0 15px;
    }

    button {
      width: 90%;
      margin-top: 15px;
    }

    .divButton {
      width: 90%;
      display: flex;
      justify-content: space-around;

      button {
        color: var(--color-text);
        font-weight: bold;
        width: 28%;
        height: 40px;
        font-size: 14px;
        border-radius: 5px;
        border: 2px solid var(--gray-1);
        margin-top: 15px;

        :hover {
          transition: 0.6s;
          color: var(--color-primary);
          border-color: var(--color-primary);
        }
      }
    }
  }

  .title {
    background: var(--color-primary);
    color: var(--white);
    font-size: 12px;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px 5px 0 0;
    padding: 0 10px;

    .close {
      font-size: 16px;

      :hover {
        color: var(--gray-1);
      }
    }
  }
`;
