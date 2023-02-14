import React from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Films from '../../components/main/films/films';
import Nav from '../../components/main/nav/nav';
import Sort from '../../components/main/sort/sort';
import { FilterType } from '../../const';
import { useAppSelector } from '../../hooks';

const MainPage: React.FC = (): JSX.Element => {
  const { films, activeFilter } = useAppSelector((state) => state);

  const watchList = films.filter((film) => film.isInWatchList);
  const watched = films.filter((film) => film.isWatched);
  const favorite = films.filter((film) => film.isFavorite);

  const watchListCount = watchList.length;
  const watchedCount = watched.length;
  const favoriteCount = favorite.length;

  return (
    <>
      <Helmet>
        <title>Cinemaddict. Выбор фильма</title>
      </Helmet>
      <Header />

      <main className="main">
        {
          activeFilter === FilterType.All &&
          <>
            <Nav activeFilter={activeFilter} />
            <Sort />
            <Films films={films} />
          </>
        }
        {
          activeFilter === FilterType.Watchlist &&
          <>
            <Nav activeFilter={activeFilter} watchListCount={watchListCount}/>
            <Sort />
            <Films films={watchList} />
          </>
        }
        {activeFilter === FilterType.History && <Films films={watched} />}
        {activeFilter === FilterType.Favorites && <Films films={favorite} />}
      </main>

      <Footer />
    </>
  );
};

export default MainPage;

