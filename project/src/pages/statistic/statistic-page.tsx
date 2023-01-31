import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Nav from '../../components/main/nav/nav';
import Statistic from '../../components/statistic/statistic';

const StatisticPage: React.FC = (): JSX.Element => (
  <>
    <Header />

    <main className="main">
      <Nav />
      <Statistic />
    </main>

    <Footer />
  </>
);

export default StatisticPage;
