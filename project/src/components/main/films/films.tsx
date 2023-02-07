import React from 'react';
import { FilmsClass, FilmTitle } from '../../../const';
import { Data } from '../../../types/data';
import FilmsList from './films-list/films-list';

type FilmsProps = {
  films: Data;
}

const Films: React.FC<FilmsProps> = ({ films }): JSX.Element => (
  <section className="films">
    {
      films.length !== 0
        ?
        <>
          <FilmsList films={films} filmsTitle={FilmTitle.All} filmsClass={FilmsClass.FilmList} isRating={false} isComment={false} />
          <FilmsList films={films} filmsTitle={FilmTitle.Rated} filmsClass={FilmsClass.FilmListExtra} isRating isComment={false} />
          <FilmsList films={films} filmsTitle={FilmTitle.Commented} filmsClass={FilmsClass.FilmListExtra} isComment isRating={false} />
        </>
        :
        <section className={FilmsClass.FilmList}>
          <h2 className='films-list__title'>There are no movies in our database</h2>
        </section>
    }
  </section>
);

export default Films;
