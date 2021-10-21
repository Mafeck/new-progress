import React from "react";
import { Container, ContainerAppBar, ContainerImg } from "./styles";
import { useHistory } from "react-router-dom";
import { FaHeart, FaUserFriends } from "react-icons/fa";

const AppBar = ({ selectedGroup = false, selectedHabits = false }) => {
  const history = useHistory();

  return (
    <ContainerAppBar>
      <Container
        onClick={() => history.push("/groups")}
        selected={selectedGroup}
      >
        <ContainerImg>
          <FaUserFriends />
        </ContainerImg>
        <p>groups</p>
      </Container>
      <Container
        onClick={() => history.push("/habits")}
        selected={selectedHabits}
      >
        <ContainerImg>
          <FaHeart />
        </ContainerImg>
        <p>habits</p>
      </Container>
    </ContainerAppBar>
  );
};

export default AppBar;
