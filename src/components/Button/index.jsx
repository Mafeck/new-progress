import { Container } from "./style";

export const Button = ({ children, whiteSchema = false, ...rest }) => {
  return (
    <Container whiteSchema={whiteSchema} {...rest}>
      {children}
    </Container>
  );
};
