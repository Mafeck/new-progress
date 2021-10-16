import { Paper } from "@material-ui/core";
import { Container, GrayButton, BlueButton, FormInput } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../components/Validation";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const registerUser = () => console.log("registerUser");
  const onSubmitFunction = () => console.log("onSubmitFunction");
  const goBack = () => console.log("goBack");

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
        <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
          <FormInput
            className="user-data"
            placeholder="Nome de usuário*"
            {...register("username")}
          />

          <FormInput
            className="user-data"
            placeholder="Endereço de Email*"
            {...register("email")}
          />
          <FormInput
            className="password"
            placeholder="Senha*"
            {...register("password")}
          />

          <FormInput
            className="confirm-password"
            placeholder="Confirme sua senha*"
            {...register("confirmPassword")}
          />
        </form>
        <BlueButton type="submit" onClick={registerUser}>
          Register
        </BlueButton>
        <GrayButton onClick={goBack}>Back</GrayButton>
      </Paper>
    </Container>
  );
};

export default Register;
