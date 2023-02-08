import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(duration);
dayjs.extend(relativeTime);

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
export const getRelativeDate = (date: Date): string => dayjs(date).fromNow();
