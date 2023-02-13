import { store } from '../store/store';
import { Film } from './data';

export type FilmData = {
  filter: string;
  films: [] | Film[];
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
