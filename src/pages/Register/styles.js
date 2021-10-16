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

export const FormInput = styled.input`
  width: 100%;
  margin-bottom: 16px;
  height: 50px;
  border-radius: 5px;
  border: none;
  background: var(--gray);
  padding-left: 12px;
  color: #c4c4c4;
  opacity: 0.5;
`;
