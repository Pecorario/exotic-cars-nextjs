import { ButtonProps } from '../../shared/models/UIProps';

import { Container } from './styles';

export function ButtonHeader({ text, onClick, type }: ButtonProps) {
  return (
    <Container onClick={onClick} types={type}>
      {text}
    </Container>
  );
}
