import { Container } from "./style";

const Card = ({ type = false, title, category }) => {
  return (
    <Container type={type}>
      <div className="imgBox"></div>
      <div>
        <h4>{title}</h4>
        <span>{category}</span>
      </div>
    </Container>
  );
};

export default Card;
