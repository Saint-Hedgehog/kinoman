import { Route, Routes } from 'react-router-dom';
// import browserHistory from '../../browser-history';
import { AppRoute } from '../../const';
import Main from '../../pages/main/main';
// import HistoryRouter from '../history-router/history-router';

const App: React.FC = () => (
  // <HistoryRouter history={browserHistory}>
  <Routes>
    <Route path={AppRoute.Main} element={<Main />} />
  </Routes>
  // </HistoryRouter>
);

export default App;
