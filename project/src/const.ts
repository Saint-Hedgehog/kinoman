export const FILM_CARD_COUNT_ON_PAGE = 5;
export const FILM_FILTRED_BY_RATING = 2;
export const FILM_FILTRED_BY_COMMENT = 2;
export const ZERO = 0;
export const TOTAL_FILMS = 27;

export enum AppRoute {
  Main = '/',
  Stats = '/stats',
  Login = '/login',
  NotFound = '*',
}

export enum FilmTitle {
  All = 'All movies. Upcoming',
  Rated = 'Top rated',
  Commented = 'Most commented',
  Loading = 'Loading...'
}

export enum FilmsClass {
 FilmList = 'films-list',
 FilmListExtra = 'films-list--extra'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const LinkParameter = {
  Disabled: 'none',
  Active: 'auto'
} as const;
