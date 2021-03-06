import { Paper } from "@material-ui/core";
import { Container } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { useHistory } from "react-router";
import { formSchema } from "../../components/Validation";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

const Register = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleForm = ({ username, email, password }) => {
    const data = {
      username,
      email,
      password,
    };

    api
      .post("/users/", data)
      .then(() => {
        history.push("/login");
      })
      .catch((e) => console.log(e));
  };
  const goBack = () => history.push("/");

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
        <h2>Cadastro</h2>
        <form onSubmit={handleSubmit(handleForm)}>
          <Input
            label={"Nome de usuário*"}
            type="text"
            name="username"
            register={register}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
          <Input
            label={"Endereço de Email*"}
            type="email"
            name="email"
            register={register}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <Input
            label={"Senha*"}
            type="password"
            name="password"
            register={register}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Input
            label={"Confirmar senha"}
            name="confirmPassword"
            type="password"
            register={register}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
          />
          <Button className="btnRegister" type="submit">
            Registrar
          </Button>
          <Button className="btnBack" whiteSchema={true} onClick={goBack}>
            Voltar
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Register;
