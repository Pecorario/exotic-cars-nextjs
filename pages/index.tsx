import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Header, Card } from '../components/index';
import { CarProps } from '../shared/models/CarsProps';
import * as S from '../styles/pages/home';
import { CarsProps } from '../shared/models/CarsProps';
import path from 'path';
import fs from 'fs/promises';
import { useEffect } from 'react';
import { carsActions } from '../store/cars-slice';
import { useDispatch } from 'react-redux';
import { useAppContext } from '../store/AppWrapper';

export default function Home({ cars }: CarsProps) {
  const router = useRouter();
  // const dispatch = useDispatch();
  const { addCars } = useAppContext();

  const selectCars = (id: string) => {
    router.push({
      pathname: '/details/[cid]',
      query: { cid: id }
    });
  };

  useEffect(() => {
    addCars(cars);
  }, [addCars, cars]);

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
}

export const getStaticProps: GetStaticProps<CarsProps> = async () => {
  const filePath = path.join(process.cwd(), 'data', 'cars.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  return {
    props: {
      cars: data.cars
    }
  };
};
