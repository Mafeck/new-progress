import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => (props.whiteSchema ? "#f5f5f5" : "#3B4977")};
  color: ${(props) => (props.whiteSchema ? "#3B4977" : "#f5f5f5")};
  border-radius: 8px;
  border: 2px solid #3b4977;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.017em;
  width: 100%;
  height: 50px;
  padding: 0px 30px;
  transition: 0.5s;

  :hover {
    opacity: 0.6;
  }
`;
