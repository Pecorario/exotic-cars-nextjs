import {
  Container,
  KebabHorizontal,
  Brand,
  Model,
  Price,
  ImgAndPrice
} from './styles';
import Image from 'next/image';
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
        <Image src={types[0].urlSideView} alt="Car" width={300} height={100} />
        <Price>{price}</Price>
      </ImgAndPrice>
    </Container>
  );
}
