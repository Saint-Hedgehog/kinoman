import React from 'react';
import { FilmsClass, FilmTitle } from '../../../const';
import { Data } from '../../../types/data';
import FilmsList from './films-list/films-list';

type FilmsProps = {
  films: Data;
}

const Films: React.FC<FilmsProps> = ({ films }): JSX.Element => (
  <section className="films">
    <FilmsList films={films} filmsTitle={FilmTitle.All} filmsClass={FilmsClass.FilmList} isRating={false} isComment={false} />
    <FilmsList films={films} filmsTitle={FilmTitle.Rated} filmsClass={FilmsClass.FilmListExtra} isRating isComment={false} />
    <FilmsList films={films} filmsTitle={FilmTitle.Commented} filmsClass={FilmsClass.FilmListExtra} isComment isRating={false} />
  </section>
);

export default Films;
