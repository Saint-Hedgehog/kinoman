const FilmDetails: React.FC = () => (
  <>
    <header className="header">
      <h1 className="header__logo logo">Cinemaddict</h1>

      <section className="header__profile profile">
        <p className="profile__rating">Movie Buff</p>
        <img className="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35" />
      </section>
    </header>

    <main className="main">
      <nav className="main-navigation">
        <div className="main-navigation__items">
          <a href="#all" className="main-navigation__item main-navigation__item--active">All movies</a>
          <a href="#watchlist" className="main-navigation__item">Watchlist <span className="main-navigation__item-count">13</span></a>
          <a href="#history" className="main-navigation__item">History <span className="main-navigation__item-count">4</span></a>
          <a href="#favorites" className="main-navigation__item">Favorites <span className="main-navigation__item-count">8</span></a>
        </div>
        <a href="#stats" className="main-navigation__additional">Stats</a>
      </nav>

      <ul className="sort">
        <li><a href="#" className="sort__button sort__button--active">Sort by default</a></li>
        <li><a href="#" className="sort__button">Sort by date</a></li>
        <li><a href="#" className="sort__button">Sort by rating</a></li>
      </ul>

      <section className="films">
        <section className="films-list">
          <h2 className="films-list__title visually-hidden">All movies. Upcoming</h2>

          <div className="films-list__container">
            <article className="film-card">
              <h3 className="film-card__title">The Dance of Life</h3>
              <p className="film-card__rating">8.3</p>
              <p className="film-card__info">
                <span className="film-card__year">1929</span>
                <span className="film-card__duration">1h 55m</span>
                <span className="film-card__genre">Musical</span>
              </p>
              <img src="./images/posters/the-dance-of-life.jpg" alt="" className="film-card__poster" />
              <p className="film-card__description">Burlesque comic Ralph &quot;Skid&quot; Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…</p>
              <a className="film-card__comments">5 comments</a>
              <form className="film-card__controls">
                <button className="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
                <button className="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
                <button className="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
              </form>
            </article>

            <article className="film-card">
              <h3 className="film-card__title">Sagebrush Trail</h3>
              <p className="film-card__rating">3.2</p>
              <p className="film-card__info">
                <span className="film-card__year">1933</span>
                <span className="film-card__duration">54m</span>
                <span className="film-card__genre">Western</span>
              </p>
              <img src="./images/posters/sagebrush-trail.jpg" alt="" className="film-card__poster" />
              <p className="film-card__description">Sentenced for a murder he did not commit, John Brant escapes from prison determined to find the real killer. By chance Brant&apos;s narrow escap…</p>
              <a className="film-card__comments">89 comments</a>
              <form className="film-card__controls">
                <button className="film-card__controls-item button film-card__controls-item--add-to-watchlist film-card__controls-item--active">Add to watchlist</button>
                <button className="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
                <button className="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
              </form>
            </article>

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
                <button className="film-card__controls-item button film-card__controls-item--mark-as-watched film-card__controls-item--active">Mark as watched</button>
                <button className="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
              </form>
            </article>

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
              <h3 className="film-card__title">Popeye the Sailor Meets Sindbad the Sailor</h3>
              <p className="film-card__rating">6.3</p>
              <p className="film-card__info">
                <span className="film-card__year">1936</span>
                <span className="film-card__duration">16m</span>
                <span className="film-card__genre">Cartoon</span>
              </p>
              <img src="./images/posters/popeye-meets-sinbad.png" alt="" className="film-card__poster" />
              <p className="film-card__description">In this short, Sindbad the Sailor (presumably Bluto playing a &quot;role&quot;) proclaims himself, in song, to be the greatest sailor, adventurer and…</p>
              <a className="film-card__comments">0 comments</a>
              <form className="film-card__controls">
                <button className="film-card__controls-item button film-card__controls-item--add-to-watchlist film-card__controls-item--active">Add to watchlist</button>
                <button className="film-card__controls-item button film-card__controls-item--mark-as-watched film-card__controls-item--active">Mark as watched</button>
                <button className="film-card__controls-item button film-card__controls-item--favorite film-card__controls-item--active">Mark as favorite</button>
              </form>
            </article>
          </div>

          <button className="films-list__show-more">Show more</button>
        </section>

        <section className="films-list--extra">
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
              <p className="film-card__description">The Martians Momar (&quot;Mom Martian&quot;) and Kimar (&quot;King Martian&quot;) are worried that their children Girmar (&quot;Girl Martian&quot;) and Bomar (&quot;Boy Marti…</p>
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
        </section>
      </section>
    </main>


    <footer className="footer">
      <section className="footer__logo logo logo--smaller">Cinemaddict</section>
      <section className="footer__statistics">
        <p>130 291 movies inside</p>
      </section>
    </footer>

    <section className="film-details">
      <form className="film-details__inner" action="" method="get">
        <div className="form-details__top-container">
          <div className="film-details__close">
            <button className="film-details__close-btn" type="button">close</button>
          </div>
          <div className="film-details__info-wrap">
            <div className="film-details__poster">
              <img className="film-details__poster-img" src="./images/posters/the-great-flamarion.jpg" alt="" />

              <p className="film-details__age">18+</p>
            </div>

            <div className="film-details__info">
              <div className="film-details__info-head">
                <div className="film-details__title-wrap">
                  <h3 className="film-details__title">The Great Flamarion</h3>
                  <p className="film-details__title-original">Original: The Great Flamarion</p>
                </div>

                <div className="film-details__rating">
                  <p className="film-details__total-rating">8.9</p>
                </div>
              </div>

              <table className="film-details__table">
                <tr className="film-details__row">
                  <td className="film-details__term">Director</td>
                  <td className="film-details__cell">Anthony Mann</td>
                </tr>
                <tr className="film-details__row">
                  <td className="film-details__term">Writers</td>
                  <td className="film-details__cell">Anne Wigton, Heinz Herald, Richard Weil</td>
                </tr>
                <tr className="film-details__row">
                  <td className="film-details__term">Actors</td>
                  <td className="film-details__cell">Erich von Stroheim, Mary Beth Hughes, Dan Duryea</td>
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

          <section className="film-details__controls">
            <input type="checkbox" className="film-details__control-input visually-hidden" id="watchlist" name="watchlist" />
            <label htmlFor="watchlist" className="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

            <input type="checkbox" className="film-details__control-input visually-hidden" id="watched" name="watched" />
            <label htmlFor="watched" className="film-details__control-label film-details__control-label--watched">Already watched</label>

            <input type="checkbox" className="film-details__control-input visually-hidden" id="favorite" name="favorite" />
            <label htmlFor="favorite" className="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
          </section>
        </div>

        <div className="form-details__bottom-container">
          <section className="film-details__comments-wrap">
            <h3 className="film-details__comments-title">Comments <span className="film-details__comments-count">4</span></h3>

            <ul className="film-details__comments-list">
              <li className="film-details__comment">
                <span className="film-details__comment-emoji">
                  <img src="./images/emoji/smile.png" width="55" height="55" alt="emoji-smile" />
                </span>
                <div>
                  <p className="film-details__comment-text">Interesting setting and a good cast</p>
                  <p className="film-details__comment-info">
                    <span className="film-details__comment-author">Tim Macoveev</span>
                    <span className="film-details__comment-day">2019/12/31 23:59</span>
                    <button className="film-details__comment-delete">Delete</button>
                  </p>
                </div>
              </li>
              <li className="film-details__comment">
                <span className="film-details__comment-emoji">
                  <img src="./images/emoji/sleeping.png" width="55" height="55" alt="emoji-sleeping" />
                </span>
                <div>
                  <p className="film-details__comment-text">Booooooooooring</p>
                  <p className="film-details__comment-info">
                    <span className="film-details__comment-author">John Doe</span>
                    <span className="film-details__comment-day">2 days ago</span>
                    <button className="film-details__comment-delete">Delete</button>
                  </p>
                </div>
              </li>
              <li className="film-details__comment">
                <span className="film-details__comment-emoji">
                  <img src="./images/emoji/puke.png" width="55" height="55" alt="emoji-puke" />
                </span>
                <div>
                  <p className="film-details__comment-text">Very very old. Meh</p>
                  <p className="film-details__comment-info">
                    <span className="film-details__comment-author">John Doe</span>
                    <span className="film-details__comment-day">2 days ago</span>
                    <button className="film-details__comment-delete">Delete</button>
                  </p>
                </div>
              </li>
              <li className="film-details__comment">
                <span className="film-details__comment-emoji">
                  <img src="./images/emoji/angry.png" width="55" height="55" alt="emoji-angry" />
                </span>
                <div>
                  <p className="film-details__comment-text">Almost two hours? Seriously?</p>
                  <p className="film-details__comment-info">
                    <span className="film-details__comment-author">John Doe</span>
                    <span className="film-details__comment-day">Today</span>
                    <button className="film-details__comment-delete">Delete</button>
                  </p>
                </div>
              </li>
            </ul>

            <div className="film-details__new-comment">
              <label htmlFor="add-emoji" className="film-details__add-emoji-label"></label>

              <label className="film-details__comment-label">
                <textarea className="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
              </label>

              <div className="film-details__emoji-list">
                <input className="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile" />
                <label className="film-details__emoji-label" htmlFor="emoji-smile">
                  <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji" />
                </label>

                <input className="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping" />
                <label className="film-details__emoji-label" htmlFor="emoji-sleeping">
                  <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji" />
                </label>

                <input className="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke" />
                <label className="film-details__emoji-label" htmlFor="emoji-puke">
                  <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji" />
                </label>

                <input className="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry" />
                <label className="film-details__emoji-label" htmlFor="emoji-angry">
                  <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji" />
                </label>
              </div>
            </div>
          </section>
        </div>
      </form>
    </section>
  </>
);

export default FilmDetails;
