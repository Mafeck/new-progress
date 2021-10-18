import styled from "styled-components";
import img from "../../assets/undraw_Publish_post_re_wmql.svg";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  button {
    color: var(--darkBlue);
    font-size: 18px;
    font-weight: bold;
    width: 95%;
    height: 50px;
    border: 2px solid var(--darkBlue);
    border-radius: 5px;
  }

  p {
    color: #b2b2b2;
    font-size: 16px;
    font-weight: 500;

    span {
      color: var(--darkBlue);
      font-weight: bold;
    }
  }

  .sectionRedirect {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 90px;
  }
`;

export const DivTitle = styled.div`
  width: 160px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 60px;

  .title--1 {
    font-size: 26px;
  }

  .title--2 {
    font-size: 22px;
  }

  .boxTitle {
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--darkBlue);
    width: 65px;
    height: 50px;
    border-radius: 5px;
  }
`;

export const DivImg = styled.div`
  background: url(${img});
  background-size: 100%;
  background-repeat: no-repeat;
  width: 90%;
  height: 36%;
`;
