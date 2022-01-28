import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

import { ButtonProps } from '../../shared/models/UIProps';
import { Container } from './styles';

export function ButtonNav({ type, onClick, disabled }: ButtonProps) {
  return (
    <Container onClick={onClick} disabled={disabled}>
      {type === 'primary' ? <BsArrowLeft /> : <BsArrowRight />}
    </Container>
  );
}
