import { carsActions } from '../../store/cars-slice';
import { useDispatch } from 'react-redux';
import { Container, Img } from './styles';

export function CarouselItem({ url, selected, id, number }: any) {
  const dispatch = useDispatch();

  const selectCar = () => {
    dispatch(carsActions.selectCar({ id: id, number: number }));
  };

  return (
    <Container selected={selected} onClick={selectCar}>
      <Img src={url} />
    </Container>
  );
}
