import { Paper, TextField } from "@material-ui/core";
import { Container, GrayButton, BlueButton } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router";
import { formSchema } from "../../components/Validation";

const Register = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleForm = (data) => {
    console.log("data", data);
    axios
      .post("https://kenzie-habits.herokuapp.com/users/", data)
      .then((response) => {
        console.log("response:", response);
        history.push("/");
      })
      .catch((e) => console.log(e));
  };
  const goBack = () => history.push("/");

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
        <h2>Cadastro</h2>
        <form onSubmit={handleSubmit(handleForm)}>
          <TextField
            id="outlined-username"
            label="Nome de usuário*"
            variant="outlined"
            margin="normal"
            size="small"
            style={{
              width: "100%",
              marginBottom: "16px",
              marginTop: "0px",
              borderRadius: "5px",
              border: "none",
              background: "var(--gray)",
              color: "var(--gray)",
              opacity: " 0.7",
            }}
            {...register("username")}
            error={!!errors.username}
            helperText={errors.username?.message}
          />

          <TextField
            id="outlined-email"
            label="Endereço de Email*"
            variant="outlined"
            margin="normal"
            size="small"
            type="email"
            style={{
              width: "100%",
              marginBottom: "16px",
              marginTop: "0px",
              borderRadius: "5px",
              border: "none",
              background: "var(--gray)",
              color: "var(--gray)",
              opacity: " 0.7",
            }}
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            id="outlined-password"
            label="Senha*"
            variant="outlined"
            margin="normal"
            size="small"
            type="password"
            style={{
              width: "100%",
              marginBottom: "16px",
              marginTop: "0px",
              borderRadius: "5px",
              border: "none",
              background: "var(--gray)",
              color: "var(--gray)",
              opacity: " 0.7",
            }}
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <TextField
            id="outlined-confirmPassword"
            label="Confirmar senha"
            variant="outlined"
            margin="normal"
            size="small"
            type="password"
            style={{
              width: "100%",
              marginBottom: "16px",
              marginTop: "0px",
              borderRadius: "5px",
              border: "none",
              background: "var(--gray)",
              color: "var(--gray)",
              opacity: " 0.7",
            }}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
          />
          <BlueButton type="submit">Register</BlueButton>
          <GrayButton onClick={goBack}>Back</GrayButton>
        </form>
      </Paper>
    </Container>
  );
};

export default Register;
