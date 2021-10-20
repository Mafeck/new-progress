import styled from "styled-components";
import img from "../../assets/undraw_Publish_post_re_wmql.svg";
import logo from "../../assets/Group 53.png";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  button {
    color: var(--color-primary);
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

export const DivLogo = styled.div`
  background: url(${logo}) no-repeat;
  background-size: contain;
  width: 160px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 60px;
`;

export const DivImg = styled.div`
  background: url(${img});
  background-size: 100%;
  background-repeat: no-repeat;
  width: 90%;
  height: 36%;
`;
