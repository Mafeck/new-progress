import * as yup from "yup";

export const formSchema = yup.object().shape({
  username: yup
    .string()
    .required("Usuário obrigatório.")
    .matches(/^[a-zA-Z0-9]+$/, "Usuário inválido"),
  email: yup.string().required("Email obrigatório").email("Email invalido."),
  password: yup
    .string()
    .required("Senha obrigatória.")
    .matches(
      "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
      "A senha deve conter no mínimo 8 caracteres, uma letra maiúscula, uma minuscula, um número e um caracter especial."
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Senha incorreta."),
});
