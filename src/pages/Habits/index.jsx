import { Container } from "./styles";
import Header from "../../components/Header/index";
import { PlusButton } from "../../components/PlusButton";

const Habits = () => {
  return (
    <Container>
      <Header />
      <PlusButton className="plusButton" />
    </Container>
  );
};

export default Habits;
