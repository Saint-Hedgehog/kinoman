import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import './style.css';

const NotFoundPage: React.FC = (): JSX.Element => (
  <main className="main">
    <section className='not-found'>
      <h1>404. Page not found</h1>
      <Link to={AppRoute.Main}>Вернуться на главную</Link>
    </section>
  </main>
);

export default NotFoundPage;
