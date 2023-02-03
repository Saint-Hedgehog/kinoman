import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../../../const';
import './style.css';

type Props = {
  isFooter?: boolean;
};

const Logo: React.FC<Props> = ({ isFooter }): JSX.Element => {
  const currentPath = useLocation().pathname;

  const isStatsPage = currentPath === AppRoute.Stats;
  const linkClass = isFooter ? 'footer__logo logo logo--smaller' : 'header__logo logo';

  return (
    isStatsPage ? (
      <Link to={AppRoute.Main} >
        <h1 className={linkClass}>Cinemaddict</h1>
      </Link >)
      : <h1 className={linkClass}>Cinemaddict</h1>
  );
};

export default Logo;
