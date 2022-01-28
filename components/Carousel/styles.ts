import styled, { css } from 'styled-components';

interface StyledCarouselProps {
  numberOfColors: number;
}

export const Container = styled.div`
  margin-top: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8.96rem;

  @media (min-width: 1350px) {
    height: 11.2rem;
  }
`;

export const CarouselContainer = styled.div<StyledCarouselProps>`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 11.2rem;
  margin-left: 1rem;
  margin-right: 4rem;

  ${props =>
    props.numberOfColors === 1 &&
    css`
      justify-content: center;
    `}

  ${props =>
    props.numberOfColors === 2 &&
    css`
      justify-content: center;

      & button + button {
        margin-left: 10%;
      }
    `}

  @media (max-width: 960px) {
    justify-content: center;
    margin: 0;
  }

  // @media (min-width: 961px) {
  //   width: 95%;
  // }

  @media (min-width: 1350px) {
    width: 65rem;
  }
`;
