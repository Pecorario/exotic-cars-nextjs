import Image from 'next/image';

import { CardProps } from '@models/UIProps';
import * as S from './styles';

export function Card({ types, brand, model, price, onClick }: CardProps) {
  return (
    <S.Container onClick={onClick}>
      <S.KebabHorizontal />
      <div>
        <S.Brand>{brand}</S.Brand>
        <S.Model>{model.toUpperCase()}</S.Model>
      </div>
      <S.ImgAndPrice>
        <Image src={types[0].urlSideView} alt="Car" width={300} height={100} />
        <S.Price>{price}</S.Price>
      </S.ImgAndPrice>
    </S.Container>
  );
}
