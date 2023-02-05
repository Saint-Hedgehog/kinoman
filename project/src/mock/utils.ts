import { DEFAULT_DAYS_OFFSET, DEFAULT_MONTHS_OFFSET, DEFAULT_YEARS_OFFSET, DESC_LENGTH, EMOJIS, MAX_COMMENT, MAX_DURATION, MAX_GENRES, MAX_RATING, MIN_DURATION, MIN_GENRES, NAMES, RANDOM_COMMENTS_DATE_PARAMS, SENTENCES } from './const';

const randomQuantity = (min: number, max:number) => Math.floor(min + Math.random() * (max + 1 - min));

export const getRandomID = (): string => String(new Date()) + String(Math.random());

export const getRandomItem = (list: string[]): string => list[Math.floor(Math.random() * list.length)];

export const getDesc = () => {
  const min = 1;
  const max = SENTENCES.length - 1;
  const quantity = randomQuantity(min, max);
  let desc = '';

  for (let i = 0; i < quantity; i++) {
    desc += getRandomItem(SENTENCES);
  }

  return desc;
};

export const getShortDesc = (desc: string) => {
  if (desc.length <= DESC_LENGTH) {
    return desc;
  }

  desc = desc
    .substring(0, DESC_LENGTH - 1)
    .trim()
    .replace(/,$/g, '');

  return `${desc}...`;
};

export const getRandomList = (list: string[]) => {

  const quantity = randomQuantity(MIN_GENRES, MAX_GENRES);
  const newList = new Set();

  while (newList.size < quantity) {
    newList.add(getRandomItem(list));
  }

  return Array.from(newList);
};

const getRandomNum = (max: number): number => Math.floor(Math.random() * max);

export const getRandomDate = (params = {}): Date => {
  const yearsOffset = DEFAULT_YEARS_OFFSET;
  const monthsOffset = DEFAULT_MONTHS_OFFSET;
  const daysOffset = DEFAULT_DAYS_OFFSET;
  const now = new Date();

  now.setDate(now.getDate() - getRandomNum(daysOffset));
  now.setMonth(now.getMonth() - getRandomNum(monthsOffset));
  now.setFullYear(now.getFullYear() - getRandomNum(yearsOffset));

  return now;
};

export const getRandomDuration = () => Math.floor(MIN_DURATION + Math.random() * (MAX_DURATION + 1 - MIN_DURATION));

export const getRandomRating = () => {
  const rating = Math.random() * MAX_RATING;

  return +rating.toFixed(1);
};

export const getRandomComments = () => {
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
