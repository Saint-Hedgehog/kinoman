import { createAction } from '@reduxjs/toolkit';
import { FilterType } from '../const';
import { Data } from '../types/data';

export const setFilms = createAction<Data>('main/setFilms');
export const changeFilter = createAction<FilterType>('main/changeFilter');

