export const FILM_CARD_COUNT_ON_PAGE = 5;
export const FILM_FILTRED_BY_RATING = 2;
export const FILM_FILTRED_BY_COMMENT = 2;
export const ZERO = 0;

export enum AppRoute {
  Main = '/',
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
