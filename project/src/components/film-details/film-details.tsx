import React from 'react';
import { useAppSelector } from '../../hooks';
import Close from './close/close';
import CommentsWrap from './comments-wrap/comments-wrap';
import Controls from './controls/controls';
import InfoWrap from './info-wrap/info-wrap';

const FilmDetails: React.FC = (): JSX.Element => {
  const { films } = useAppSelector((state) => state);

  return (
    <section className="film-details">
      <form className="film-details__inner" action="" method="get">
        <div className="form-details__top-container">
          <Close />
          <InfoWrap films={films} />
          <Controls />
        </div>

        <div className="form-details__bottom-container">
          <CommentsWrap films={films} />
        </div>
      </form>
    </section>
  );
};

export default FilmDetails;
