import styled from "styled-components";

export const Container = styled.div`
  background: #ededed;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const EditModal = styled.div`
  width: 90%;
  height: 180px;
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  top: 50px;
  margin: 0 auto;

  .divTitle {
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
    width: 295px;
    height: 50px;
    margin-top: 10px;
    border: 2px solid #3b4977;
    border-radius: 5px;
    padding-left: 15px;
  }

  button {
    background: #f5f5f5;
    color: #cccccc;
    font-size: 16px;
    font-weight: 400;
    width: 295px;
    height: 50px;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    /* cursor: not-allowed; */
    // mudar o a cor e o estado do botão, quando o usuário escrever algo no input
  }
`;
