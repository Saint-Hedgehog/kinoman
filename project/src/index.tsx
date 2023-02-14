import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { store } from './store/store';
import { getCardsData } from './mock/utils';
import { setFilms } from './store/action';
import { TOTAL_FILMS } from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const films = getCardsData(TOTAL_FILMS);

store.dispatch(setFilms(films));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
