import React from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Films from '../../components/main/films/films';
import Nav from '../../components/main/nav/nav';
import Sort from '../../components/main/sort/sort';
import { useAppSelector } from '../../hooks';

const MainPage: React.FC = (): JSX.Element => {
  const {films, activeFilter} = useAppSelector((state) => state);

  return (
    <>
      <Helmet>
        <title>Cinemaddict. Выбор фильма</title>
      </Helmet>
      <Header />

      <main className="main">
        <Nav activeFilter={activeFilter}/>
        <Sort />
        <Films films={films} />
      </main>

      <Footer />
    </>
  );
};

export default MainPage;

