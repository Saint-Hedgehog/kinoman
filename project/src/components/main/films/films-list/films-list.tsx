import React, { useState } from 'react';
import classNames from 'classnames';
import FilmCard from './film-card/film-card';
import { FilmsClass, FILM_CARD_COUNT_ON_PAGE, FILM_FILTRED_BY_COMMENT, FILM_FILTRED_BY_RATING, ZERO } from '../../../../const';
import { Data } from '../../../../types/data';

type FilmListProps = {
  films: Data;
  filmsTitle: string;
  filmsClass: string;
  isRating: boolean;
  isComment: boolean;
}

const FilmList: React.FC<FilmListProps> = ({ films, filmsTitle, filmsClass, isRating = true, isComment = true }): JSX.Element => {
  const isFilmsClassStyle = filmsClass === FilmsClass.FilmList;
  const isFilmsExtraClassStyle = filmsClass === FilmsClass.FilmListExtra;
  const sectionClass = classNames({ 'films-list': isFilmsClassStyle, 'films-list--extra': isFilmsExtraClassStyle });
  const titleClass = classNames('films-list__title', { 'visually-hidden': isFilmsClassStyle });

  const [showFilmsCount, setShowFilmsCount] = useState<number>(FILM_CARD_COUNT_ON_PAGE);

  const filmList = films.slice(ZERO, showFilmsCount);

  const filtredFilmsByRating = [...films].sort((a, b) => b.rating - a.rating);
  const filmsFiltredByRating = filtredFilmsByRating.slice(ZERO, FILM_FILTRED_BY_RATING);

  const filtredFilmsByComment = [...films].sort((a, b) => b.comments.length - a.comments.length);
  const filmsFiltredByComment = filtredFilmsByComment.slice(ZERO, FILM_FILTRED_BY_COMMENT);

  const handleShowMoreCLick = () => {
    setShowFilmsCount(showFilmsCount + FILM_CARD_COUNT_ON_PAGE);
  };

  return (
    <section className={sectionClass}>
      <h2 className={titleClass}>{filmsTitle}</h2>

      <div className="films-list__container">
        {
          filmsClass === FilmsClass.FilmList &&
          filmList.map((film) => (
            <FilmCard key={film.id} film={film} />
          ))
        }
        {
          filmsClass === FilmsClass.FilmListExtra && isRating &&
          filmsFiltredByRating.map((film) => (
            <FilmCard key={film.id} film={film} />
          ))
        }
        {
          filmsClass === FilmsClass.FilmListExtra && isComment &&
          filmsFiltredByComment.map((film) => (
            <FilmCard key={film.id} film={film} />
          ))
        }
      </div>
      {
        isFilmsClassStyle && !(films.length - showFilmsCount <= 0) &&
        (<button className="films-list__show-more" onClick={handleShowMoreCLick}>Show more</button>)
      }
    </section>
  );
};

export default FilmList;
