import { FilmTitle } from '../../../const';
import { films } from '../../../mock/films';
import FilmsList from './films-list/films-list';

const Films: React.FC = (): JSX.Element => (
  <section className="films">
    <FilmsList films={films} filmsTitle={FilmTitle.All}/>

    {/* <section className="films-list--extra">
      <h2 className="films-list__title">Top rated</h2>

      <div className="films-list__container">
        <article className="film-card">
          <h3 className="film-card__title">The Man with the Golden Arm</h3>
          <p className="film-card__rating">9.0</p>
          <p className="film-card__info">
            <span className="film-card__year">1955</span>
            <span className="film-card__duration">1h 59m</span>
            <span className="film-card__genre">Drama</span>
          </p>
          <img src="./images/posters/the-man-with-the-golden-arm.jpg" alt="" className="film-card__poster" />
          <p className="film-card__description">Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…</p>
          <a className="film-card__comments">18 comments</a>
          <form className="film-card__controls">
            <button className="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
            <button className="film-card__controls-item button film-card__controls-item--mark-as-watched  film-card__controls-item--active">Mark as watched</button>
            <button className="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
          </form>
        </article>

        <article className="film-card">
          <h3 className="film-card__title">The Great Flamarion</h3>
          <p className="film-card__rating">8.9</p>
          <p className="film-card__info">
            <span className="film-card__year">1945</span>
            <span className="film-card__duration">1h 18m</span>
            <span className="film-card__genre">Mystery</span>
          </p>
          <img src="./images/posters/the-great-flamarion.jpg" alt="" className="film-card__poster" />
          <p className="film-card__description">The film opens following a murder at a cabaret in Mexico City in 1936, and then presents the events leading up to it in flashback. The Grea…</p>
          <a className="film-card__comments">12 comments</a>
          <form className="film-card__controls">
            <button className="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
            <button className="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
            <button className="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
          </form>
        </article>
      </div>
    </section>

    <section className="films-list--extra">
      <h2 className="films-list__title">Most commented</h2>

      <div className="films-list__container">
        <article className="film-card">
          <h3 className="film-card__title">Santa Claus Conquers the Martians</h3>
          <p className="film-card__rating">2.3</p>
          <p className="film-card__info">
            <span className="film-card__year">1964</span>
            <span className="film-card__duration">1h 21m</span>
            <span className="film-card__genre">Comedy</span>
          </p>
          <img src="./images/posters/santa-claus-conquers-the-martians.jpg" alt="" className="film-card__poster" />
          <p className="film-card__description">The Martians Momar (&quot;Mom Martian&quot;) and Kimar (&quot;King Martian&quot;) are worried that their children Girmar (&quot;Girl Martian&quot;) and Bomar (&quot;Boy Marti…&quot;)</p>
          <a className="film-card__comments">465 comments</a>
          <form className="film-card__controls">
            <button className="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
            <button className="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
            <button className="film-card__controls-item button film-card__controls-item--favorite film-card__controls-item--active">Mark as favorite</button>
          </form>
        </article>

        <article className="film-card">
          <h3 className="film-card__title">Made for Each Other</h3>
          <p className="film-card__rating">5.8</p>
          <p className="film-card__info">
            <span className="film-card__year">1939</span>
            <span className="film-card__duration">1h 32m</span>
            <span className="film-card__genre">Comedy</span>
          </p>
          <img src="./images/posters/made-for-each-other.png" alt="" className="film-card__poster" />
          <p className="film-card__description">John Mason (James Stewart) is a young, somewhat timid attorney in New York City. He has been doing his job well, and he has a chance of bei…</p>
          <a className="film-card__comments">56 comments</a>
          <form className="film-card__controls">
            <button className="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
            <button className="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
            <button className="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
          </form>
        </article>
      </div>
    </section> */}
  </section>
);

export default Films;
