import Films from './films/films';
import Nav from './nav/nav';
import Sort from './sort/sort';

const Main: React.FC = () => (
  <main className="main">
    <Nav />
    <Sort />
    <Films />
  </main>
);

export default Main;
