import styled from 'styled-components';
import { StyledInputProps } from '@models/UIProps';

export const Container = styled.div<StyledInputProps>`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  width: fit-content;

  & svg {
    color: ${props => props.theme.colors.icon};
    font-size: 1.5rem;
  }
`;

export const InputContent = styled.input<StyledInputProps>`
  font-family: 'Segoe UI Semi Bold', sans-serif;
  font-size: 0.75rem;
  color: ${props => props.theme.colors.text_secondary};
  background: transparent;
  margin-left: ${props => (props.icon === 'local' ? '0.2rem' : '0.5rem')};
  width: ${props => (props.icon === 'local' ? '100%' : '5rem')};
`;
