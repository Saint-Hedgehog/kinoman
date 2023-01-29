import React from 'react';
import classNames from 'classnames';
import { Films } from '../../../../types/film';
import FilmCard from './film-card/film-card';

type FilmListProps = {
  films: Films;
  filmsTitle: string;
}

const FilmList: React.FC<FilmListProps> = ({ films, filmsTitle }): JSX.Element => {
  const linkClass = classNames({ 'films-list': true });

  return (
    <section className={linkClass}>
      <h2 className="films-list__title visually-hidden">{filmsTitle}</h2>

      <div className="films-list__container">
        {films.map((film) => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>

      <button className="films-list__show-more">Show more</button>
    </section>
  );
};

export default FilmList;
