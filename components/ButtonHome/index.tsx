import { IoIosArrowUp } from 'react-icons/io';

import { Container } from './styles';

export function ButtonHome() {
  const backToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Container onClick={backToTop}>
      <IoIosArrowUp />
    </Container>
  );
}
