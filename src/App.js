import GlobalStyled from "./styles/global";
import { Input } from "./components/Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box } from "@material-ui/core";
import { Button } from "./components/Button";

const regexPassword =
  /^((?=.*[?!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome obrigatório")
    .matches("^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ's ]+$", "Nome inválido"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .min(8, "Senha com no mínimo 8 caracteres")
    .matches(
      regexPassword,
      "Necessário ter letras, números e ao menos um símbolo!"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas não são iguais"),
  bio: yup.string().required("Bio obrigatória"),
  contact: yup.string().required("Contato obrigatório"),
  course_module: yup.string().required("Curso obrigatório"),
});

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitForm = (data) => {
    console.log(data);
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {
          m: 1,
          width: "35ch",
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
      }}
      onSubmit={handleSubmit(onSubmitForm)}
    >
      <h1>Patrick's Hub</h1>

      <Input
        label="Nome"
        name="name"
        register={register}
        error={!!errors.name}
        helperText={errors.name?.message}
      ></Input>

      <Input
        label="E-mail"
        name="email"
        register={register}
        error={!!errors.email}
        helperText={errors.email?.message}
      ></Input>

      <Input
        label="Senha"
        name="password"
        type="password"
        register={register}
        error={!!errors.password}
        helperText={errors.password?.message}
      ></Input>

      <Input
        label="Confirmação de Senha"
        name="confirmPassword"
        type="password"
        register={register}
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword?.message}
      ></Input>
      <Input
        label="Bio"
        name="bio"
        register={register}
        error={!!errors.bio}
        helperText={errors.bio?.message}
      ></Input>
      <Input
        label="Linkedin"
        name="contact"
        register={register}
        error={!!errors.contact}
        helperText={errors.contact?.message}
      ></Input>
      <Input
        label="Curso"
        name="course_module"
        register={register}
        error={!!errors.course_module}
        helperText={errors.course_module?.message}
      ></Input>
      <Button type="submit">click aqui</Button>
      <GlobalStyled />
    </Box>
  );
}

export default App;
