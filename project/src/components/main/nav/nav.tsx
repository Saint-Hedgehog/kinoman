import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';

const Nav: React.FC = (): JSX.Element => (
  <nav className="main-navigation">
    <div className="main-navigation__items">
      <a href="#all" className="main-navigation__item main-navigation__item--active">All movies</a>
      <a href="#watchlist" className="main-navigation__item">Watchlist <span className="main-navigation__item-count">13</span></a>
      <a href="#history" className="main-navigation__item">History <span className="main-navigation__item-count">4</span></a>
      <a href="#favorites" className="main-navigation__item">Favorites <span className="main-navigation__item-count">8</span></a>
    </div>
    <Link to={AppRoute.Stats} className="main-navigation__additional">Stats</Link>
  </nav>
);

export default Nav;
