import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../../../../const';
import { Film } from '../../../../../types/data';
import { getDuration } from '../../../../../utils';

type FilmCardProps = {
  film: Film;
}

const FilmCard: React.FC<FilmCardProps> = ({ film }): JSX.Element => {
  const navigate = useNavigate();
  const { title, rating, releaseDate, runtime, genres, poster, shortDesc, comments } = film;

  const formatedFilmDuration = getDuration(runtime);

  const handleShowFilmDetailsCLick = () => {
    // navigate(`${AppRoute.Film}${AppRoute.Details}`);
    navigate(AppRoute.Details);
  };

  return (
    <article className="film-card">
      <h3 className="film-card__title">{title}</h3>
      <p className="film-card__rating">{rating}</p>
      <p className="film-card__info">
        <span className="film-card__year">{releaseDate.getFullYear()}</span>
        <span className="film-card__duration">{formatedFilmDuration}</span>
        <span className="film-card__genre">{genres[0]}</span>
      </p>
      <img
        src={`./images/posters/${poster}`}
        alt={`The poster of the film '${title}'`}
        className="film-card__poster"
        onClick={handleShowFilmDetailsCLick}
      />
      <p className="film-card__description">{shortDesc}</p>
      <a className="film-card__comments">{comments.length} comments</a>
      <form className="film-card__controls">
        <button className="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
        <button className="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
        <button className="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
      </form>
    </article>
  );
};

export default FilmCard;
