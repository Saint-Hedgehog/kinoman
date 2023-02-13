import { createAction } from '@reduxjs/toolkit';
import { Data } from '../types/data';

export const setFilms = createAction<Data>('main/setFilms');
export const changeFilter = createAction<string>('main/changeFilter');

