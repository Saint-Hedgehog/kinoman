import React from 'react';
import classNames from 'classnames';
import { Films } from '../../../../types/film';
import FilmCard from './film-card/film-card';
import { FilmsClass } from '../../../../const';

type FilmListProps = {
  films: Films;
  filmsTitle: string;
  filmsClass: string;
}

const FilmList: React.FC<FilmListProps> = ({ films, filmsTitle, filmsClass }): JSX.Element => {
  const isFilmsClassStyle = filmsClass === FilmsClass.FilmList;
  const isFilmsExtraClassStyle = filmsClass === FilmsClass.FilmListExtra;
  const sectionClass = classNames({ 'films-list': isFilmsClassStyle, 'films-list--extra': isFilmsExtraClassStyle });
  const titleClass = classNames('films-list__title', { 'visually-hidden': isFilmsClassStyle });

  return (
    <section className={sectionClass}>
      <h2 className={titleClass}>{filmsTitle}</h2>

      <div className="films-list__container">
        {films.map((film) => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>
      {
        isFilmsClassStyle && (<button className="films-list__show-more">Show more</button>)
      }
    </section>
  );
};

export default FilmList;
