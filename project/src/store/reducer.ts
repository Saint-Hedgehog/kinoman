import { createReducer } from '@reduxjs/toolkit';
import { setFilms } from './action';
import { FilterType } from '../const';
import { FilmData } from '../types/state';

const initialState: FilmData = {
  filter: FilterType.All,
  films: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setFilms, (state, action) => {
      state.films = action.payload;
    });
  // .addCase(changeFilter, (state, action) => {
  //   state.filter = action.payload;
  // });
});
