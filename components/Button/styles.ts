import styled, { css } from 'styled-components';
import { StyledButtonProps } from '@models/UIProps';

export const Container = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme.colors.text_primary};
  border-radius: 25px;
  box-shadow: 0px 5px 20px #0000001a;

  height: 3.125rem;
  width: 11.0625rem;

  font-family: 'Segoe UI Light';
  font-size: 1rem;

  ${props =>
    props.types === 'primary'
      ? css`
          color: ${props => props.theme.colors.text_primary};
        `
      : css`
          background: ${props => props.theme.colors.text_primary};
          color: white;
        `}

  & svg {
    font-size: 1rem;
    margin-top: 0.15rem;
    ${props =>
      props.types === 'primary'
        ? css`
            margin-right: 0.725rem;
          `
        : css`
            margin-left: 0.725rem;
          `}
  }

  &:hover {
    ${props =>
      props.types === 'primary'
        ? css`
            background: ${props => props.theme.colors.text_primary};
            color: white;
          `
        : css`
            filter: brightness(0.9);
          `}
  }
`;

export const Text = styled.p``;
