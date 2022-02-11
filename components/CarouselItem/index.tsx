import { Container, Img } from './styles';
import { useAppContext } from '../../store/AppWrapper';
import { CarouselItemProps } from '../../shared/models/UIProps';

export function CarouselItem({ url, selected, id, number }: CarouselItemProps) {
  const { selectCar } = useAppContext();

  const selectCarFunction = () => {
    if (id) {
      selectCar(id, number);
    }
  };

  return (
    <Container selected={selected} onClick={selectCarFunction}>
      <Img src={url} />
    </Container>
  );
}
