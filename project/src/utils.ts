import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

export const getDuration = (minutes: number): string => {
  const filmDuration = dayjs.duration(minutes, 'minutes');
  const hours = filmDuration.hours();
  const mins = filmDuration.minutes();

  let h = hours > 0 ? `${hours}h` : '';
  const m = mins > 0 ? `${mins}m` : '';

  if (hours && mins) {
    h += ' ';
  }
  return h + m;
};

export const getReleaseDate = (date: Date): string => dayjs(date).format('DD MMMM YYYY');
