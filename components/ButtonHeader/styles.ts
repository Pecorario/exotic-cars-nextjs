import styled, { css } from 'styled-components';
import { StyledButtonProps } from '@models/UIProps';

export const Container = styled.button<StyledButtonProps>`
  font-family: 'Segoe UI Bold';
  font-size: 1rem;
  color: ${props => props.theme.colors.text_button};

  width: 5.25rem;
  height: 2.25rem;

  ${props =>
    props.types === 'secondary' &&
    css`
      border-radius: 13px;
      border: 2px solid ${props.theme.colors.text_button};
    `}

  &:hover {
    filter: brightness(0.8);
  }
`;
