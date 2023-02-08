export const FILM_CARD_COUNT_ON_PAGE = 5;
export const FILM_FILTRED_BY_RATING = 2;
export const FILM_FILTRED_BY_COMMENT = 2;
export const ZERO = 0;
export const TOTAL_FILMS = 27;
export const KEY_ESCAPE = 'Escape';

export enum AppRoute {
  Main = '/',
  Stats = '/stats',
  Login = '/login',
  // Film = '/film',
  // Details = ':id/*',
  Details = 'details',
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

export const USER_STATUSES = [
  {
    min: 21,
    name: 'Movie buff'
  },
  {
    min: 11,
    name: 'Fan',
  },
  {
    min: 1,
    name: 'Novice',
  },
];

export enum FilterType {
  All = 'all',
  Watchlist = 'watchlist',
  History = 'watched',
  Favorites = 'favorite',
}

export const FILTERS = {
  [FilterType.All]: {
    name: 'All movies'
  },
  [FilterType.Watchlist]: {
    propName: 'isInWatchList',
    name: 'Watchlist'
  },
  [FilterType.History]: {
    propName: 'isWatched',
    name: 'History'
  },
  [FilterType.Favorites]: {
    propName: 'isFavorite',
    name: 'Favorites'
  },
};

export const SortType = {
  DEFAULT: 'default',
  DATE: 'date',
  RATING: 'raiting',
  COMMENTS: 'comments'
};

export const StatsFilter = {
  ALL_TIME: 'all-time',
  TODAY: 'today',
  WEEK: 'week',
  MONTH: 'month',
  YEAR: 'year',
};
