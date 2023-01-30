import { FilmsClass, FilmTitle } from '../../../const';
import { films } from '../../../mock/films';
import FilmsList from './films-list/films-list';

const Films: React.FC = (): JSX.Element => (
  <section className="films">
    <FilmsList films={films} filmsTitle={FilmTitle.All} filmsClass={FilmsClass.FilmList}/>
    <FilmsList films={films} filmsTitle={FilmTitle.Rated} filmsClass={FilmsClass.FilmListExtra}/>
    <FilmsList films={films} filmsTitle={FilmTitle.Commented} filmsClass={FilmsClass.FilmListExtra}/>
  </section>
);

export default Films;
