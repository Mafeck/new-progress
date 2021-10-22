import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  h2 {
    color: var(--darkBlue);
    margin-bottom: 28px;
    text-align: center;
  }

  .btnRegister {
    margin: 10px 0 0 0;
  }
  .btnBack {
    margin: 15px 0 0 0;
  }
`;

export const GrayButton = styled.button`
  color: var(--darkBlue);
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  height: 50px;
  border: 2px solid var(--darkBlue);
  border-radius: 5px;
  margin-top: 12px;
`;

export const BlueButton = styled(GrayButton)`
  color: var(--white);
  background-color: var(--darkBlue);
`;
