import { Container, DivLogo, DivImg } from "./style";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../../components/Button/index";

const Home = () => {
  const history = useHistory();

  const handleStarNow = () => {
    return history.push("/register");
  };

  return (
    <Container>
      <DivLogo>
        <span>New</span>
        <p>Progress</p>
      </DivLogo>
      <DivImg />
      <div className="sectionRedirect">
        <Button whiteSchema={true} onClick={handleStarNow}>
          Iniciar agora
        </Button>
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
