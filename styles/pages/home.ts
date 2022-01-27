import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 7.6%;
  padding-top: 5.2rem;

  @media (max-width: 860px) {
    padding-top: 7rem;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 479px) {
    justify-content: center;
  }
`;
