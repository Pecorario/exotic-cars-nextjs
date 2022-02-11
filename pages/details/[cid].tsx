import type { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import path from 'path';
import fs from 'fs/promises';

import { Carousel, Header } from '../../components/index';

import { CarProps, CarsProps } from '../../shared/models/CarsProps';
import * as S from '../../styles/pages/details';

const getColor = (color: string | undefined) => {
  if (color) {
    return color[0].toUpperCase() + color.slice(1);
  }
  return;
};

export default function Details({ car }: CarsProps) {
  const router = useRouter();
  const type = car?.types[0];
  const color = getColor(type?.color);

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
      <S.Container>
        <S.DetailsContainer>
          <S.LogoImg src={car?.logo} alt={car?.brand} />
          <S.PriceAndModel>
            <S.Title>
              {car?.brand} {car?.model}
            </S.Title>
            <S.Price>${car?.price}/day</S.Price>
          </S.PriceAndModel>
        </S.DetailsContainer>
        <S.Middle>
          <S.ButtonNormalScreen
            text="Back to catalog"
            type="primary"
            onClick={backHome}
          />
          <S.Car>
            <S.Img
              src={type?.urlFrontView}
              alt={`${car?.brand} ${car?.model}`}
            />
            <S.TypeContainer>
              <S.Number>{type?.number}</S.Number>
              <S.Color>{color}</S.Color>
            </S.TypeContainer>
          </S.Car>
        </S.Middle>
        <S.ButtonContainer>
          <S.ButtonMobile
            text="Back to catalog"
            type="primary"
            onClick={backHome}
          />
          <S.ButtonBook text="Book now" type="secondary" onClick={backHome} />
        </S.ButtonContainer>
        <Carousel types={car?.types} id={car?.id} />
      </S.Container>
    </div>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), 'data', 'cars.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  return data;
}

export const getStaticProps: GetStaticProps = async context => {
  const { params } = context;

  const carId = params?.cid;
  const data = await getData();
  const car = data.cars.find((car: CarProps) => car.id === carId);

  if (!car) {
    return { notFound: true };
  }

  return {
    props: {
      car
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getData();

  const ids = data.cars.map((car: CarProps) => car.id);
  const pathsWithParams = ids.map((id: number) => ({ params: { cid: id } }));

  return {
    paths: pathsWithParams,
    fallback: true
  };
};
