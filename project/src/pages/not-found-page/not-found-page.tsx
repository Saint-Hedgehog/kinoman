import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { POSTERS, TITLES, GENRES } from '../../mock/const';
import { getRandomID, getRandomItem, getDesc, getShortDesc, getRandomList, getRandomDate } from '../../mock/utils';
import './style.css';

const NotFoundPage: React.FC = (): JSX.Element => {

  const id = getRandomID();
  const poster = getRandomItem(POSTERS);
  const title = getRandomItem(TITLES);
  const origTitle = getRandomItem(TITLES);
  const desc = getDesc();
  const shortDesc = getShortDesc(desc);
  const genres = getRandomList(GENRES, 1, 3);
  const releaseDate = getRandomDate();

  console.log(releaseDate);


  return (
    <main className="main">
      <section className='not-found'>
        <h1>404. Page not found</h1>
        <Link to={AppRoute.Main}>Вернуться на главную</Link>
      </section>
    </main>
  );
};

export default NotFoundPage;
