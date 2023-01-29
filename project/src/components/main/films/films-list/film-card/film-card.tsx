import { Film } from '../../../../../types/film';

type FilmCardProps = {
  film: Film;
}

const FilmCard: React.FC<FilmCardProps> = (props) => {
  const { film } = props;
  const { title, rating, year, duration, genre, poster, description, comments } = film;

  return (
    <article className="film-card">
      <h3 className="film-card__title">{title}</h3>
      <p className="film-card__rating">{rating}</p>
      <p className="film-card__info">
        <span className="film-card__year">{year}</span>
        <span className="film-card__duration">{duration}</span>
        <span className="film-card__genre">{genre}</span>
      </p>
      <img src={poster} alt="" className="film-card__poster" />
      <p className="film-card__description">{description}</p>
      <a className="film-card__comments">{comments} comments</a>
      <form className="film-card__controls">
        <button className="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
        <button className="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
        <button className="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
      </form>
    </article>
  );
};

export default FilmCard;
