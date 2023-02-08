import React from 'react';
import { Data } from '../../../types/data';
import { getDuration, getReleaseDate } from '../../../utils';

type InfoWrapProps = {
  films: Data;
}

const InfoWrap: React.FC<InfoWrapProps> = ({ films }): JSX.Element => {
  const { poster, title, ageRating, origTitle, rating, director, writers, actors, releaseDate, runtime, country, genres, desc } = films[0];

  const formatedReleaseDate = getReleaseDate(releaseDate);
  const formatedFilmDuration = getDuration(runtime);
  return (
    <div className="film-details__info-wrap">
      <div className="film-details__poster">
        <img className="film-details__poster-img" src={`./images/posters/${poster}`} alt={`The poster of the film '${title}'`} />

        <p className="film-details__age">{ageRating}</p>
      </div>

      <div className="film-details__info">
        <div className="film-details__info-head">
          <div className="film-details__title-wrap">
            <h3 className="film-details__title">{title}</h3>
            <p className="film-details__title-original">{origTitle}</p>
          </div>

          <div className="film-details__rating">
            <p className="film-details__total-rating">{rating}</p>
          </div>
        </div>

        <table className="film-details__table">
          <tr className="film-details__row">
            <td className="film-details__term">Director</td>
            <td className="film-details__cell">{director}</td>
          </tr>
          <tr className="film-details__row">
            <td className="film-details__term">Writers</td>
            <td className="film-details__cell">{writers.join(', ').split(',, ')}</td>
          </tr>
          <tr className="film-details__row">
            <td className="film-details__term">Actors</td>
            <td className="film-details__cell">{actors.join(', ').split(',, ')}</td>
          </tr>
          <tr className="film-details__row">
            <td className="film-details__term">Release Date</td>
            <td className="film-details__cell">{formatedReleaseDate}</td>
          </tr>
          <tr className="film-details__row">
            <td className="film-details__term">Runtime</td>
            <td className="film-details__cell">{formatedFilmDuration}</td>
          </tr>
          <tr className="film-details__row">
            <td className="film-details__term">Country</td>
            <td className="film-details__cell">{country}</td>
          </tr>
          <tr className="film-details__row">
            <td className="film-details__term">Genre{genres.length > 1 ? 's' : ''}</td>
            <td className="film-details__cell">
              {genres.map((genre) => <span key={genre} className="film-details__genre">{genre}</span>)}
            </td>
          </tr>
        </table>

        <p className="film-details__film-description">{desc}</p>
      </div>
    </div>
  );
};

export default InfoWrap;
