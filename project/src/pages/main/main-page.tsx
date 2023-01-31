import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Films from '../../components/main/films/films';
import Nav from '../../components/main/nav/nav';
import Sort from '../../components/main/sort/sort';

const MainPage: React.FC = (): JSX.Element => (
  <>
    <Header />

    <main className="main">
      <Nav />
      <Sort />
      <Films />
    </main>

    <Footer />
  </>
);

export default MainPage;

