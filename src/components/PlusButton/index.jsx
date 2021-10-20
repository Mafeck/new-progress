import { Container } from "../PlusButton/style";
import { AiOutlinePlus } from "react-icons/ai";

export const PlusButton = ({ greenSchema = false, ...rest }) => {
  return (
    <Container greenSchema={greenSchema} type="button" {...rest}>
      <AiOutlinePlus />
    </Container>
  );
};
