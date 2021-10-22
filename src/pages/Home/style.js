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
  @media (min-width: 426px) {
    flex-direction: row;
    margin-top: 150px;
    flex-wrap: wrap;
    align-content: flex-start;

    button {
      width: 200px;
    }
  }
`;

export const DivLogo = styled.div`
  width: 160px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 60px;
  span {
    color: var(--white);
    background-color: var(--color-primary);
    padding: 10px 5px 5px 5px;
    width: 62.5px;
    height: 50px;
    font-size: 25px;
    font-weight: 700;
    border-radius: 5px;
    text-align: center;
  }
  p {
    color: black;
    font-weight: 700;
    font-size: 20px;
  }

  @media (min-width: 426px) {
    width: 1600px;
    justify-content: center;
    margin-top: 0;
    margin-bottom: 150px;
    height: auto;

    span {
      width: 190px;
      height: 110px;
      font-size: 70px;
    }
    p {
      font-size: 65px;
    }
  }
`;

export const DivImg = styled.div`
  background: url(${img});
  background-size: 100%;
  background-repeat: no-repeat;
  width: 90%;
  height: 36%;

  @media (min-width: 426px) {
    display: none;
  }
`;
