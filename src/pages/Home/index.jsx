import { Container, DivTitle, DivImg } from "./styles";
import { Link, useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const handleStarNow = () => {
    return history.push("/register");
  };

  return (
    <Container>
      <DivTitle>
        <div className="boxTitle">
          <h1 className="title--1">New</h1>
        </div>
        <h1 className="title--2">Progress</h1>
      </DivTitle>

      <DivImg />
      <div className="sectionRedirect">
        <button onClick={handleStarNow}>Start now</button>
        <p>
          Já tem uma conta?
          <Link to="/login">
            <span> Login.</span>
          </Link>
        </p>
      </div>
    </Container>
  );
};

export default Home;
