import { createReducer } from '@reduxjs/toolkit';
import { setFilms, changeFilter } from './action';
import { FilterType } from '../const';
import { FilmData } from '../types/state';

const initialState: FilmData = {
  films: [],
  activeFilter: FilterType.All,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(changeFilter, (state, action) => {
      state.activeFilter = action.payload;
    });
});
