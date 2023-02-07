import React from 'react';
import { Data } from '../../../types/data';

type InfoWrapProps = {
  films: Data;
}

const InfoWrap: React.FC<InfoWrapProps> = ({ films }): JSX.Element => {
  const { poster, title, ageRating, origTitle, rating, director, writers, actors } = films[0];

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
            <td className="film-details__cell">{writers}</td>
          </tr>
          <tr className="film-details__row">
            <td className="film-details__term">Actors</td>
            <td className="film-details__cell">{actors}</td>
          </tr>
          <tr className="film-details__row">
            <td className="film-details__term">Release Date</td>
            <td className="film-details__cell">30 March 1945</td>
          </tr>
          <tr className="film-details__row">
            <td className="film-details__term">Runtime</td>
            <td className="film-details__cell">1h 18m</td>
          </tr>
          <tr className="film-details__row">
            <td className="film-details__term">Country</td>
            <td className="film-details__cell">USA</td>
          </tr>
          <tr className="film-details__row">
            <td className="film-details__term">Genres</td>
            <td className="film-details__cell">
              <span className="film-details__genre">Drama</span>
              <span className="film-details__genre">Film-Noir</span>
              <span className="film-details__genre">Mystery</span>
            </td>
          </tr>
        </table>

        <p className="film-details__film-description">
          The film opens following a murder at a cabaret in Mexico City in 1936, and then presents the events leading up to it in flashback. The Great Flamarion (Erich von Stroheim) is an arrogant, friendless, and misogynous marksman who displays his trick gunshot act in the vaudeville circuit. His show features a beautiful assistant, Connie (Mary Beth Hughes) and her drunken husband Al (Dan Duryea), Flamarion&apos;s other assistant. Flamarion falls in love with Connie, the movie&apos;s femme fatale, and is soon manipulated by her into killing her no good husband during one of their acts.
        </p>
      </div>
    </div>
  );
};

export default InfoWrap;
