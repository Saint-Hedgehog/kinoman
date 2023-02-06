import React from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Films from '../../components/main/films/films';
import Nav from '../../components/main/nav/nav';
import Sort from '../../components/main/sort/sort';
import { Data } from '../../types/data';

type MainProps = {
  films: Data;
}

const MainPage: React.FC<MainProps> = ({ films }): JSX.Element => (
  <>
    <Helmet>
      <title>Cinemaddict. Выбор фильма</title>
    </Helmet>
    <Header />

    <main className="main">
      <Nav />
      <Sort />
      <Films films={films} />
    </main>

    <Footer />
  </>
);

export default MainPage;

