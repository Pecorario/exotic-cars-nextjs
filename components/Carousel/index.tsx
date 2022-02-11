import { ButtonNav, CarouselItem } from '../index';
import { CarProps, TypeProps } from '../../shared/models/CarsProps';
import { useEffect, useState } from 'react';
import { useAppContext } from '../../store/AppWrapper';
import { Container, CarouselContainer } from './styles';

interface CarouselProps {
  types: TypeProps[] | undefined;
  id: string | undefined;
}

export function Carousel({ types, id }: CarouselProps) {
  const [backDisabled, setBackDisabled] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(false);
  // const dispatch = useDispatch();
  const { cars, organizingArray, carouselNavigation } = useAppContext();

  const carCtx = cars.find((car: CarProps) => car.id === id);
  const selected = carCtx?.types.find(
    (type: TypeProps) => type.selected === true
  );
  // const selected = types.find((type: TypeProps) => type.selected === true);

  const maxNumber = types?.length;

  // const typesFormated = types.map((type: TypeProps) => {
  //   return {
  //     number: type.number,
  //     color: type.color,
  //     urlSideView: type.urlSideView,
  //     urlFrontView: type.urlFrontView,
  //     selected: false
  //   };
  // });

  useEffect(() => {
    if (maxNumber === 1) {
      setNextDisabled(true);
      setBackDisabled(true);
    } else if (maxNumber === 2) {
      setBackDisabled(true);
    }
  }, [maxNumber]);

  useEffect(() => {
    if (id) {
      organizingArray(id);
    }
  }, []);

  const nextType = () => {
    if (maxNumber !== 1 && id !== undefined) {
      carouselNavigation('forward', id);
    }
  };

  const backType = () => {
    if (maxNumber === 3 && id !== undefined) {
      carouselNavigation('back', id);
    }
  };

  return (
    <Container>
      <ButtonNav type="primary" onClick={backType} disabled={backDisabled} />
      <CarouselContainer numberOfColors={maxNumber}>
        {carCtx?.types.map((type: TypeProps) => {
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
