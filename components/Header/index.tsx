import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import { ButtonHeader, Input } from '../index';

import * as S from './styles';

export function Header() {
  const date = new Date();
  const day = date.toLocaleString('pt-BR', { day: '2-digit' });
  const month = date.toLocaleString('pt-BR', { month: '2-digit' });
  const year = date.getFullYear();

  const today = `${year}-${month}-${day}`;

  const [local, setLocal] = useState('');
  const [fromDate, setFromDate] = useState(today);
  const [toDate, setToDate] = useState(today);

  const localChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocal(event.target.value);
  };

  const fromDateChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFromDate(event.target.value);
  };

  const toDateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToDate(event.target.value);
  };

  return (
    <S.Container>
      <S.Content>
        <S.Title>
          <S.TitleOne>EXOTIC</S.TitleOne>
          <S.TitleTwo>CARS</S.TitleTwo>
        </S.Title>
        <S.InputsContainer>
          <Input
            type="text"
            icon="local"
            value={local}
            onChange={localChangeHandler}
          />
          <Input
            type="date"
            icon="date"
            value={fromDate}
            onChange={fromDateChangeHandler}
          />
          <Input
            type="date"
            icon="date"
            value={toDate}
            onChange={toDateChangeHandler}
          />
          <S.Search>
            <FaSearch />
          </S.Search>
        </S.InputsContainer>
        <S.ButtonsContainer>
          <ButtonHeader
            type="primary"
            text="Sign up"
            onClick={() => alert('Sign up!')}
          />
          <ButtonHeader
            type="secondary"
            text="Sign in"
            onClick={() => alert('Sign in!')}
          />
        </S.ButtonsContainer>
      </S.Content>
      <S.InputsContainerMobile>
        <Input
          type="text"
          icon="local"
          value={local}
          onChange={localChangeHandler}
        />
        <Input
          type="date"
          icon="date"
          value={fromDate}
          onChange={fromDateChangeHandler}
        />
        <Input
          type="date"
          icon="date"
          value={toDate}
          onChange={toDateChangeHandler}
        />
        <S.Search>
          <FaSearch />
        </S.Search>
      </S.InputsContainerMobile>
    </S.Container>
  );
}
