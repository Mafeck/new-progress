import { Paper } from "@material-ui/core";
import { ButtonBox, Container } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { useHistory } from "react-router";
import { loginFormSchema } from "../../components/Validation";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Box } from "@material-ui/system";
import { useContext } from "react";
import { UserContext } from "../../Providers/User";

const Login = () => {
  const history = useHistory();
  const { setToken, setUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmitFunction = (data) => {
    setUser(data);
    api
      .post("/sessions/", data)
      .then((response) => {
        const token = response.data.access;
        setToken(token);
        localStorage.clear();
        localStorage.setItem("@newProgress:user", JSON.stringify(data));
        localStorage.setItem("@newProgress:token", JSON.stringify(token));
        return history.push("/habits");
      })
      .catch((e) => console.log(e));
  };

  const handleClick = () => history.push("/register");

  return (
    <Container>
      <Paper
        elevation={3}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "90vw",
          padding: "35px",
          maxWidth: "500px",
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
          <ButtonBox>
            <Button type="submit">Entrar</Button>
            <span>Não tem uma conta?</span>
            <Button whiteSchema={true} onClick={() => handleClick()}>
              Registrar
            </Button>
          </ButtonBox>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
