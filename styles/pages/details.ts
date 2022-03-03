import styled from 'styled-components';
import { Button } from '@components/index';

export const Container = styled.div`
  background: linear-gradient(125deg, #ffffff 0%, #d8d7d7 100%);
  padding: 0 6.25%;
  padding-top: 6rem;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 860px) {
    padding-top: 9rem;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: auto;
  height: 7.6875rem;

  @media (max-width: 960px) {
    height: 5.38rem;
  }
`;

export const PriceAndModel = styled.div`
  margin-left: 2.4375rem;
`;

export const Title = styled.h1`
  font-family: 'Segoe UI Bold';
  font-size: 3.125rem;
  color: ${props => props.theme.colors.text_primary};

  @media (max-width: 960px) {
    font-size: 2rem;
  }
`;

export const Price = styled.p`
  font-family: 'Segoe UI Light';
  font-size: 2.5rem;
  color: ${props => props.theme.colors.text_primary};

  @media (max-width: 960px) {
    font-size: 1.2rem;
  }
`;

export const Middle = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonNormalScreen = styled(Button)`
  @media (max-width: 960px) {
    display: none;
  }
`;

export const ButtonMobile = styled(Button)`
  height: 2.1875rem;
  width: 7.74rem;
  font-size: 0.7rem;

  @media (min-width: 961px) {
    display: none;
  }
`;

export const ButtonBook = styled(Button)`
  @media (max-width: 960px) {
    height: 2.1875rem;
    width: 7.74rem;
    font-size: 0.7rem;
  }
`;

export const Car = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const Img = styled.img`
  width: 100%;

  @media (min-width: 1200px) {
    height: 35vh;
    width: auto;
  }
`;

export const TypeContainer = styled.div`
  position: absolute;
  right: 0;
  top: -2rem;
`;

export const Number = styled.h1`
  font-family: 'Segoe UI Bold';
  font-size: 3.125rem;
  color: ${props => props.theme.colors.text_primary};
  text-align: center;

  @media (max-width: 960px) {
    font-size: 2rem;
  }
`;

export const Color = styled.p`
  font-family: 'Segoe UI Light';
  font-size: 1.875rem;
  color: ${props => props.theme.colors.text_primary};
  text-align: center;

  @media (max-width: 960px) {
    font-size: 0.8rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 960px) {
    justify-content: space-around;
  }
`;
