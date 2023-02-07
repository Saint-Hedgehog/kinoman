import { Data } from '../types/data';
import {
  AGE_RATINGS,
  COUNTRIES,
  DEFAULT_DAYS_OFFSET,
  DEFAULT_MONTHS_OFFSET,
  DEFAULT_YEARS_OFFSET,
  DESC_LENGTH,
  EMOJIS,
  GENRES,
  MAX_ACTORS_NAMES,
  MAX_COMMENT,
  MAX_DURATION,
  MAX_GENRES,
  MAX_RATING,
  MAX_WRITERS_NAMES,
  MIN_ACTORS_NAMES,
  MIN_DURATION,
  MIN_GENRES,
  MIN_WRITERS_NAMES,
  NAMES,
  POSTERS,
  RANDOM_COMMENTS_DATE_PARAMS,
  SENTENCES,
  TITLES,
  WATCHED_RANDOM_DATE_PARAMS
} from './const';

const getRandomNum = (max: number): number => Math.floor(Math.random() * max);
const getRandomQuantity = (min: number, max: number): number => Math.floor(min + Math.random() * (max + 1 - min));

const getRandomID = (): string => String(new Date()) + String(Math.random());

const getRandomItem = (list: string[]): string => list[Math.floor(Math.random() * list.length)];

const getDesc = (): string => {
  const min = 1;
  const max = SENTENCES.length - 1;
  const quantity = getRandomQuantity(min, max);
  let desc = '';

  for (let i = 0; i < quantity; i++) {
    desc += getRandomItem(SENTENCES);
  }

  return desc;
};

const getShortDesc = (desc: string): string => {
  if (desc.length <= DESC_LENGTH) {
    return desc;
  }

  desc = desc
    .substring(0, DESC_LENGTH - 1)
    .trim()
    .replace(/,$/g, '');

  return `${desc}...`;
};

const getRandomList = (list: string[], min: number, max: number): string[] => {
  const quantity = getRandomQuantity(min, max);
  const newList = new Set<string>();

  while (newList.size < quantity) {
    newList.add(getRandomItem(list));
  }
  // .join(', ')
  return Array.from(newList);
};

const getRandomDate = (params = {}): Date => {
  const yearsOffset = DEFAULT_YEARS_OFFSET;
  const monthsOffset = DEFAULT_MONTHS_OFFSET;
  const daysOffset = DEFAULT_DAYS_OFFSET;
  const now = new Date();

  now.setDate(now.getDate() - getRandomNum(daysOffset));
  now.setMonth(now.getMonth() - getRandomNum(monthsOffset));
  now.setFullYear(now.getFullYear() - getRandomNum(yearsOffset));

  return now;
};

const getRandomRating = () => {
  const rating = Math.random() * MAX_RATING;

  return +rating.toFixed(1);
};

const getRandomComments = () => {
  const quantity = Math.floor(Math.random() * MAX_COMMENT);
  const list = [];

  for (let i = 0; i < quantity; i++) {
    const id = getRandomID();
    const author = getRandomItem(NAMES);
    const text = getRandomItem(SENTENCES);
    const date = getRandomDate(RANDOM_COMMENTS_DATE_PARAMS);
    const emoji = getRandomItem(EMOJIS);

    list.push({
      id,
      author,
      text,
      emoji,
      date,
    });
  }

  return list;
};

export const getCardsData = (quantity: number): Data => {
  const data: Data = [];

  for (let i = 0; i < quantity; i++) {
    const id = getRandomID();
    const poster = getRandomItem(POSTERS);
    const title = getRandomItem(TITLES);
    const origTitle = getRandomItem(TITLES);
    const desc = getDesc();
    const shortDesc = getShortDesc(desc);
    const genres = getRandomList(GENRES, MIN_GENRES, MAX_GENRES);
    const releaseDate = getRandomDate();
    const runtime = getRandomQuantity(MIN_DURATION, MAX_DURATION);
    const rating = getRandomRating();
    const comments = getRandomComments();
    const isInWatchList = getRandomQuantity(0, 1) > 0.5;
    const isWatched = getRandomQuantity(0, 1) > 0.5;
    const isFavorite = getRandomQuantity(0, 1) > 0.5;
    const watchedDate = isWatched ? getRandomDate(WATCHED_RANDOM_DATE_PARAMS) : null;
    const ageRating = getRandomItem(Object.keys(AGE_RATINGS));
    const country = getRandomItem(COUNTRIES);
    const director = getRandomItem(NAMES);
    const writers = getRandomList(NAMES, MIN_WRITERS_NAMES, MAX_WRITERS_NAMES);
    const actors = getRandomList(NAMES, MIN_ACTORS_NAMES, MAX_ACTORS_NAMES);

    data.push({
      id,
      poster,
      title,
      origTitle,
      desc,
      shortDesc,
      genres,
      releaseDate,
      runtime,
      rating,
      ageRating,
      comments,
      country,
      director,
      writers,
      actors,
      isInWatchList,
      isWatched,
      isFavorite,
      watchedDate
    });
  }

  return data;
};
