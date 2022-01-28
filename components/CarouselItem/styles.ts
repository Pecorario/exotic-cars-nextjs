import styled, { css } from 'styled-components';

export interface StyledCarouselProps {
  selected: boolean;
}

export const Container = styled.button<StyledCarouselProps>`
  height: 8.96rem;
  width: 12.5rem;

  border-radius: 8px;
  background: linear-gradient(90deg, #d5d5d5 0%, #d4d4d4 100%);
  box-shadow: 0px 5px 20px #0000001a;
  padding-left: 1.5rem;
  padding-top: 1rem;

  ${props =>
    props.selected === true &&
    css`
      background: linear-gradient(90deg, #c4c1f1 0%, #dcd0ef 100%);
      height: 12.05rem;
      width: 16rem;
      padding: 0;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      margin-bottom: 0.5rem;

      & img {
        width: 20rem;
      }
    `}

  @media (max-width: 960px) {
    ${props =>
      props.selected === false &&
      css`
        display: none;
      `}
  }

  @media (min-width: 1350px) {
    height: 11.2rem;
    width: 15.625rem;

    & img {
      width: 18rem;
    }

    ${props =>
      props.selected === true &&
      css`
        height: 15.0625rem;
        width: 20rem;

        & img {
          width: 25rem;
        }
      `}
  }
`;

export const Img = styled.img`
  width: 14.4rem;
`;
