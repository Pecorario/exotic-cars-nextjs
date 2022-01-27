import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components';
import * as S from '../styles/pages/home';

const Home: NextPage = () => {
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
      <body>
        <Header />
        <S.Container>
          <S.ImgContainer>oi</S.ImgContainer>
        </S.Container>
      </body>
    </div>
  );
};

export default Home;
