import {
  Container,
  KebabHorizontal,
  Brand,
  Model,
  Img,
  Price,
  ImgAndPrice
} from './styles';

// interface

export function Card({ types, brand, model, price, onClick }: any) {
  return (
    <Container onClick={onClick}>
      <KebabHorizontal />
      <div>
        <Brand>{brand}</Brand>
        <Model>{model.toUpperCase()}</Model>
      </div>
      <ImgAndPrice>
        <Img src={types[0].urlSideView} />
        <Price>{price}</Price>
      </ImgAndPrice>
    </Container>
  );
}
