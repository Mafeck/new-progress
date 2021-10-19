import { Paper } from "@material-ui/core";
import { ButtonBox, Container } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { useHistory } from "react-router";
import { loginFormSchema } from "../../components/Validation";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useContext } from "react";
import { UserContext } from "../../Providers/User";
import { Box } from "@material-ui/system";

const Login = () => {
  const history = useHistory();
  const { token, setToken, user, setUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmitFunction = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        console.log(response);
        return history.push("/habits");
      })
      .catch((e) => console.log(e));
  };

  const handleClick = () => history.push("/register");

  return (
    <Container>
      <Paper
        elevation={10}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "90vw",
          padding: "35px",
        }}
      >
        <h2>Login</h2>
        <Box component="form" onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            label={"Nome de usuário*"}
            type="text"
            register={register}
            name="username"
            error={!!errors.username}
            helperText={errors.username?.message}
          />

          <Input
            label={"Senha*"}
            type="password"
            register={register}
            name="password"
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button type="submit">Entrar</Button>
          {/* <ButtonBox> */}
          {/* </ButtonBox> */}
        </Box>
        <span>Não tem uma conta?</span>
        <Button whiteSchema={true} onClick={() => handleClick()}>
          Registrar
        </Button>
      </Paper>
    </Container>
  );
};

export default Login;
