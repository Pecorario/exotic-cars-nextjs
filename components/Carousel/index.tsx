import { ButtonNav, CarouselItem } from '../index';
import { TypeProps } from '../../shared/models/CarsProps';
import { carsActions } from '../../store/cars-slice';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Container, CarouselContainer } from './styles';

const changePosition = (arr: any[], from: number, to: number) => {
  arr.splice(to, 0, arr.splice(from, 1)[0]);
  return arr;
};

export function Carousel({ types, id }: any) {
  const [backDisabled, setBackDisabled] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(false);
  const dispatch = useDispatch();
  const selected = types.find((type: TypeProps) => type.selected === true);

  const maxNumber = types.length;

  const typesFormated = types.map((type: TypeProps) => {
    return {
      number: type.number,
      color: type.color,
      urlSideView: type.urlSideView,
      urlFrontView: type.urlFrontView,
      selected: false
    };
  });

  console.log('Tipos? : ', typesFormated);

  useEffect(() => {
    if (maxNumber === 1) {
      setNextDisabled(true);
      setBackDisabled(true);
    } else if (maxNumber === 2) {
      setBackDisabled(true);
    }
  }, [maxNumber]);

  useEffect(() => {
    dispatch(carsActions.organizingArray({ id }));
  }, [dispatch, id, selected]);

  const nextType = () => {
    if (maxNumber !== 1) {
      dispatch(carsActions.carouselNavigation({ id: id, type: 'forward' }));
    }
  };

  const backType = () => {
    if (maxNumber === 3) {
      dispatch(carsActions.carouselNavigation({ id: id, type: 'back' }));
    }
  };

  return (
    <Container>
      <ButtonNav type="primary" onClick={backType} disabled={backDisabled} />
      <CarouselContainer numberOfColors={maxNumber}>
        {typesFormated.map((type: TypeProps) => {
          return (
            <CarouselItem
              url={type.urlFrontView}
              selected={type.selected}
              number={type.number}
              id={id}
              key={type.number}
            />
          );
        })}
      </CarouselContainer>
      <ButtonNav type="secondary" onClick={nextType} disabled={nextDisabled} />
    </Container>
  );
}
