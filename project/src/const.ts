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

export const Posters = [
  'made-for-each-other.png',
  'popeye-meets-sinbad.png',
  'sagebrush-trail.jpg',
  'santa-claus-conquers-the-martians.jpg',
  'the-dance-of-life.jpg',
  'the-great-flamarion.jpg',
  'the-man-with-the-golden-arm.jpg',
] as const;

export const Titles = [
  'The Dance of Life',
  'Sagebrush Trail',
  'The Man with the Golden Arm',
  'Santa Claus Conquers the Martians',
  'Popeye the Sailor Meets Sindbad ',
  'The Man with the Golden Arm',
  'The Great Flamarion',
  'Santa Claus Conquers the Martians',
  'Made for Each Other',
] as const;

export const Sentences = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget. ',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.',
] as const;

export const Genres = [
  'Musical',
  'Western',
  'Drama',
  'Comedy',
  'Cartoon',
  'Mystery',
] as const;

export const Names = [
  'Luciana Khan',
  'Josh Cross',
  'Yu Fuller',
  'Larry Goodman',
  'Nida Becker',
  'Eshaal Carter',
  'Zayn Rigby',
  'Bill Davies',
  'Robson Merrill',
  'Dru Sharpe',
] as const;

export const Countries = [
  'United States',
  'France',
  'China',
  'India',
  'United Kingdom',
  'Nigeria',
  'Egypt',
  'Iran',
  'Japan',
  'Korea',
  'Hong Kong',
  'Turkey',
  'Pakistan',
  'Bangladesh',
  'Indonesia',
  'Trinidad and Tobago',
  'Nepal',
] as const;
