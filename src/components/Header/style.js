import styled, { keyframes } from "styled-components";
import logo from "../../assets/Group 53.png";

export const Container = styled.div`
  background: #ededed;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  .logo {
    width: 110px;
    height: 35px;
    background: url(${logo}) no-repeat;
    background-size: contain;
    margin-left: 15px;
  }
`;

export const Perfil = styled.div`
  color: #c4c4c4;
  width: 130px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 5px;

  .perfil {
    font-size: 40px;
    max-height: 40px;
    padding: 0;
  }
`;

export const ContainerPerfil = styled.div`
  background: #f5f5f5;
  width: 265px;
  height: 138px;
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  top: 55px;
  right: 15px;
  border-radius: 5px;

  button {
    width: 250px;
    height: 58px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    border: none;
    border-radius: 5px;
    margin-top: 7px;

    .divIcon {
      background: #ffffff;
      font-size: 18px;
      width: 46px;
      height: 46px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }

    .divText {
      width: 180px;
      height: 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;

      p {
        color: #c4c4c4;
        font-size: 8px;
        font-weight: bold;
      }
    }
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
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  .modalContent {
    width: 95%;
    background: #ffffff;
    border-radius: 5px;
    animation: ${ModalEffect} 0.6s ease;
  }

  .modalBody {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 10px;
  }

  .modalHeader {
    background: #3b7773;
    color: white;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px 5px 0 0;
    padding: 0 10px;
  }

  input {
    font-size: 20px;
    width: 100%;
    height: 50px;
    margin-top: 10px;
    border: 2px solid #3b4977;
    border-radius: 5px;
    padding-left: 15px;
  }

  button {
    color: var(--gray-1);
    width: 100%;
    margin-top: 10px;
    border: none;
  }
`;
