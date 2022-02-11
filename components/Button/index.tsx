import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import { ButtonProps } from '../../shared/models/UIProps';
import { Container } from './styles';

export function Button({ text, onClick, type, ...rest }: ButtonProps) {
  return (
    <Container {...rest} onClick={onClick} types={type}>
      {type === 'secondary' ? (
        <>
          {text}
          <BsArrowRight />
        </>
      ) : (
        <>
          <BsArrowLeft />
          {text}
        </>
      )}
    </Container>
  );
}
