import { Container } from "./style";

const Card = ({ type = false, title, category, ...rest }) => {
  return (
    <Container type={type} {...rest}>
      <div className="imgBox"></div>
      <div>
        <h4>{title}</h4>
        <span>{category}</span>
      </div>
    </Container>
  );
};

export default Card;
