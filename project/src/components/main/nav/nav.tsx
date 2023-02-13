import React, { MouseEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppRoute, filters, FilterType, LinkParameter } from '../../../const';
import { useAppDispatch } from '../../../hooks';
import { changeFilter } from '../../../store/action';
import { capitalizeFirstLetter } from '../../../utils';

type NavProps = {
  activeFilter: FilterType | string;
}

const Nav: React.FC<NavProps> = ({activeFilter}): JSX.Element => {
  const currentPath = useLocation().pathname;
  const linkParameter = currentPath === AppRoute.Stats ? LinkParameter.Disabled : LinkParameter.Active;
  const dispatch = useAppDispatch();

  return (
    <nav className="main-navigation">
      <div className="main-navigation__items">
        {
          filters.map((filter) => (
            <a
              key={filter}
              onClick={(evt: MouseEvent<HTMLAnchorElement>) => {
                evt.preventDefault();
                dispatch(changeFilter(filter));
              }}
              href={`#${filter}`}
              className={`main-navigation__item ${activeFilter === filter ? 'main-navigation__item--active' : ''}`}
            >
              {capitalizeFirstLetter(filter)}
            </a>)
          )
        }
        {/* <a href="#all" className="main-navigation__item main-navigation__item--active">All movies</a>
        <a href="#watchlist" className="main-navigation__item">Watchlist <span className="main-navigation__item-count">13</span></a>
        <a href="#history" className="main-navigation__item">History <span className="main-navigation__item-count">4</span></a>
        <a href="#favorites" className="main-navigation__item">Favorites <span className="main-navigation__item-count">8</span></a> */}
      </div>
      <Link
        to={AppRoute.Stats}
        style={{ pointerEvents: linkParameter }}
        className="main-navigation__additional"
      >
        Stats
      </Link>
    </nav>
  );
};

export default Nav;
