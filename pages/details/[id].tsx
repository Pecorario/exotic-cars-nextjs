import { Carousel, Header } from '../../components/index';
import { CarProps, TypeProps } from '../../shared/models/CarsProps';
import { RootStateOrAny, useSelector } from 'react-redux';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import {
  Container,
  Img,
  DetailsContainer,
  LogoImg,
  Price,
  PriceAndModel,
  Title,
  Middle,
  Car,
  TypeContainer,
  Number,
  Color,
  ButtonContainer,
  ButtonMobile,
  ButtonNormalScreen,
  ButtonBook
} from '../../styles/pages/details';
import Head from 'next/head';

const Details: NextPage = () => {
  const getCarById = (id: string | string[] | undefined) => {
    if (id) {
      return cars.find((car: CarProps) => car.id === +id);
    }
  };

  const router = useRouter();
  const cars = useSelector((state: RootStateOrAny) => state.cars.cars);

  const id = router.query.id;
  const car = getCarById(id);
  const type = car.types.find((type: TypeProps) => type.selected === true);
  const color = type.color[0].toUpperCase() + type.color.substr(1);

  const backHome = () => {
    router.push('/');
  };

  return (
    <div>
      <Head>
        <link
          rel="preload"
          href="/fonts/SegoeUI.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/SegoeUI-Light.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/SegoeUI-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/SegoeUI-SemiBold.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Header />
      <Container>
        <DetailsContainer>
          <LogoImg src={car.logo} alt={car.brand} />
          <PriceAndModel>
            <Title>
              {car.brand} {car.model}
            </Title>
            <Price>${car.price}/day</Price>
          </PriceAndModel>
        </DetailsContainer>
        <Middle>
          <ButtonNormalScreen
            text="Back to catalog"
            type="primary"
            onClick={backHome}
          />
          <Car>
            <Img src={type.urlFrontView} alt={`${car.brand} ${car.model}`} />
            <TypeContainer>
              <Number>{type.number}</Number>
              <Color>{color}</Color>
            </TypeContainer>
          </Car>
        </Middle>
        <ButtonContainer>
          <ButtonMobile
            text="Back to catalog"
            type="primary"
            onClick={backHome}
          />
          <ButtonBook text="Book now" type="secondary" onClick={backHome} />
        </ButtonContainer>
        <Carousel types={car.types} id={car.id} />
      </Container>
    </div>
  );
};

export default Details;
