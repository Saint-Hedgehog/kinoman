import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainPage from '../../pages/main/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import StatisticPage from '../../pages/statistic/statistic-page';
import PrivateRoute from '../private-route/private-route';
import FilmDetails from '../film-details/film-details';


const App: React.FC = (): JSX.Element => (
  <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage />} />
        {/* <Route path={AppRoute.Film}>
          <Route path={AppRoute.Details} element={<FilmDetails />} />
        </Route> */}
        <Route path={AppRoute.Details} element={<FilmDetails />} />
        <Route path={AppRoute.Stats} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <StatisticPage />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);

export default App;
