import React, { MouseEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppRoute, filterNames, filters, FilterType, LinkParameter } from '../../../const';
import { useAppDispatch } from '../../../hooks';
import { changeFilter } from '../../../store/action';
import { capitalizeFirstLetter } from '../../../utils';

type NavProps = {
  activeFilter: FilterType;
  watchListCount?: number;
}

const Nav: React.FC<NavProps> = ({ activeFilter, watchListCount }): JSX.Element => {
  const dispatch = useAppDispatch();

  const currentPath = useLocation().pathname;
  const linkParameter = currentPath === AppRoute.Stats ? LinkParameter.Disabled : LinkParameter.Active;

  return (
    <nav className="main-navigation">
      <div className="main-navigation__items">
        {
          filters.map((filter, index) => (
            <Link
              key={filter}
              onClick={(evt: MouseEvent<HTMLAnchorElement>) => {
                evt.preventDefault();
                dispatch(changeFilter(filter));
              }}
              to={`#${filterNames[index]}`}
              className={`main-navigation__item ${activeFilter === filter ? 'main-navigation__item--active' : ''}`}
            >
              {
                filter === FilterType.All ?
                  `${capitalizeFirstLetter(filterNames[index])} movies` :
                  <>
                    {capitalizeFirstLetter(filterNames[index])} <span className="main-navigation__item-count">{watchListCount}</span>
                  </>
              }
            </Link>)
          )
        }
      </div>
      <Link
        to={AppRoute.Stats}
        style={{ pointerEvents: linkParameter }}
        className="main-navigation__additional"
      >
        Stats
      </Link>
    </nav >
  );
};

export default Nav;
