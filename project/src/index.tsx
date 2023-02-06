import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { TOTAL_FILMS } from './const';
import { getCardsData } from './mock/utils';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const films = getCardsData(TOTAL_FILMS);

root.render(
  <React.StrictMode>
    <App films={films} />
  </React.StrictMode>,
);
