import { ButtonHeader } from '../index';
import { Input } from '../index';
import { useState } from 'react';

import { FaSearch } from 'react-icons/fa';

import {
  Container,
  Content,
  Title,
  TitleOne,
  TitleTwo,
  ButtonsContainer,
  InputsContainer,
  InputsContainerMobile,
  Search
} from './styles';

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
    <Container>
      <Content>
        <Title>
          <TitleOne>EXOTIC</TitleOne>
          <TitleTwo>CARS</TitleTwo>
        </Title>
        <InputsContainer>
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
          <Search>
            <FaSearch />
          </Search>
        </InputsContainer>
        <ButtonsContainer>
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
        </ButtonsContainer>
      </Content>
      <InputsContainerMobile>
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
        <Search>
          <FaSearch />
        </Search>
      </InputsContainerMobile>
    </Container>
  );
}
