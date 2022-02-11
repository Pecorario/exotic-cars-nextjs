import { carsActions } from '../../store/cars-slice';
import { useDispatch } from 'react-redux';
import { Container, Img } from './styles';
import { useAppContext } from '../../store/AppWrapper';

export function CarouselItem({ url, selected, id, number }: any) {
  // const dispatch = useDispatch();
  const { selectCar } = useAppContext();

  const selectCarFunction = () => {
    selectCar(id, number);
  };

  return (
    <Container selected={selected} onClick={selectCarFunction}>
      <Img src={url} />
    </Container>
  );
}
