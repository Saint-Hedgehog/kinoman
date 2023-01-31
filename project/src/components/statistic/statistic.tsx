import ChartWrap from './chart-wrap/chart-wrap';
import Filters from './filters/filters';
import Rank from './rank/rank';
import TextList from './text-list/text-list';

const Statistic: React.FC = (): JSX.Element => (
  <section className="statistic">
    <Rank />
    <Filters />
    <TextList />
    <ChartWrap />
  </section>
);

export default Statistic;
