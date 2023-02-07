import React from 'react';
import { Data } from '../../types/data';
import Close from './close/close';
import CommentsWrap from './comments-wrap/comments-wrap';
import Controls from './controls/controls';
import InfoWrap from './info-wrap/info-wrap';

type FilmDetailsProps = {
  films: Data;
}

const FilmDetails: React.FC<FilmDetailsProps> = ({ films }): JSX.Element => (
  <section className="film-details">
    <form className="film-details__inner" action="" method="get">
      <div className="form-details__top-container">
        <Close />
        <InfoWrap films={films}/>
        <Controls />
      </div>

      <div className="form-details__bottom-container">
        <CommentsWrap />
      </div>
    </form>
  </section>
);

export default FilmDetails;
