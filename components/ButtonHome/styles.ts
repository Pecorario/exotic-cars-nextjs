import styled from 'styled-components';

export const Container = styled.button`
  width: 4.5625rem;
  height: 4.5625rem;
  border-radius: 50%;
  background: #e6d3f1;
  box-shadow: 0px 5px 20px #0000001a;

  position: fixed;
  right: 3rem;
  bottom: 5rem;

  & svg {
    color: white;
    font-size: 3rem;
  }

  @media (min-width: 768px) {
    right: 7.6%;
    bottom: 10rem;
  }
`;
