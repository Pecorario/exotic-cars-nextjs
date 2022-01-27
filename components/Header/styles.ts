import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: ${props => props.theme.colors.background_primary};
  box-shadow: 0px 10px 30px #0000001a;

  padding: 0 7.6%;

  width: 100vw;
  display: flex;

  align-items: center;
  justify-content: space-between;

  height: 5.2rem;

  @media (max-width: 860px) {
    flex-direction: column;
    padding-top: 1rem;
    padding-bottom: 1rem;
    height: 7rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  /* height: 5.2rem; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  display: flex;
  align-items: baseline;
`;

export const TitleOne = styled.h1`
  font-family: 'Segoe UI Semi Bold';
  font-size: 1.5rem;
  margin-right: 0.2rem;
`;
export const TitleTwo = styled.h1`
  font-family: 'Segoe UI';
  font-size: 1rem;
`;

export const InputsContainer = styled.div`
  display: flex;
  width: 30.6875rem;
  height: 2.25rem;
  background: ${props => props.theme.colors.background_input};

  border-radius: 18px;
  position: relative;

  @media (max-width: 860px) {
    display: none;
  }
`;

export const InputsContainerMobile = styled.div`
  display: flex;
  width: 30.6875rem;
  height: 2.25rem;
  background: ${props => props.theme.colors.background_input};

  border-radius: 18px;
  position: relative;
  margin-top: 0.5rem;

  @media (max-width: 400px) {
    padding-right: 2.2rem;
    width: 100%;
  }

  @media (min-width: 861px) {
    display: none;
  }
`;

export const Search = styled.button`
  background: white;
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 3px 15px #00000014;
  position: absolute;
  top: 0.1875rem;
  right: 0.1875rem;

  & svg {
    color: ${props => props.theme.colors.text_button};
    font-size: 1rem;
  }

  &:hover {
    filter: opacity(0.7);
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;

  & button + button {
    margin-left: 1.75rem;
  }
`;
