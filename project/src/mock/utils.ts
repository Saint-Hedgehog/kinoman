import { DEFAULT_DAYS_OFFSET, DEFAULT_MONTHS_OFFSET, DEFAULT_YEARS_OFFSET, DESC_LENGTH, SENTENCES } from './const';

export const getRandomID = (): string => String(new Date()) + String(Math.random());

export const getRandomItem = (list: string[]): string => list[Math.floor(Math.random() * list.length)];

export const getDesc = () => {
  const min = 1;
  const max = SENTENCES.length - 1;
  const quantity = Math.floor(Math.random() * max) + min;
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

export const getRandomList = (list: string[], min: number, max: number) => {
  const quantity = Math.floor(Math.random() * (max - min)) + min;
  const newList = new Set();

  while (newList.size < quantity) {
    newList.add(getRandomItem(list));
  }

  return Array.from(newList);
};

const getRandomNum = (max: number): number => Math.floor(Math.random() * max);

// type dateProps = {
//   yearsOffset: number;
//   monthsOffset: number;
//   daysOffset: number;
// }

export const getRandomDate = () => {
  // const { yearsOffset = DEFAULT_YEARS_OFFSET,
  //   monthsOffset = DEFAULT_MONTHS_OFFSET,
  //   daysOffset = DEFAULT_DAYS_OFFSET } = params;
  const yearsOffset = DEFAULT_YEARS_OFFSET;
  const monthsOffset = DEFAULT_MONTHS_OFFSET;
  const daysOffset = DEFAULT_DAYS_OFFSET;
  const now = new Date();

  now.setDate(now.getDate() - getRandomNum(daysOffset));
  now.setMonth(now.getMonth() - getRandomNum(monthsOffset));
  now.setFullYear(now.getFullYear() - getRandomNum(yearsOffset));

  return now;
};
