import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { Header, Card } from '../components/index';
import { CarProps } from '../shared/models/CarsProps';
import { fetchCarsData } from '../store/cars-actions';
import * as S from '../styles/pages/home';

const Home: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cars = useSelector((state: RootStateOrAny) => state.cars.cars);

  useEffect(() => {
    dispatch(fetchCarsData());
  }, [dispatch]);

  const selectCars = (id: number) => {
    router.push({
      pathname: '/details/[id]',
      query: { id: id }
    });
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
      <S.Container>
        <S.ImgContainer>
          {cars.map((car: CarProps) => {
            return (
              <Card
                key={car.id}
                types={car.types}
                brand={car.brand}
                model={car.model}
                price={car.price}
                onClick={() => selectCars(car.id)}
              />
            );
          })}
        </S.ImgContainer>
      </S.Container>
    </div>
  );
};

export default Home;
