const Filters: React.FC = (): JSX.Element => (
  <form action="https://echo.htmlacademy.ru/" method="get" className="statistic__filters">
    <p className="statistic__filters-description">Show stats:</p>

    <input type="radio" className="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-all-time" value="all-time" checked />
    <label htmlFor="statistic-all-time" className="statistic__filters-label">All time</label>

    <input type="radio" className="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-today" value="today" />
    <label htmlFor="statistic-today" className="statistic__filters-label">Today</label>

    <input type="radio" className="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-week" value="week" />
    <label htmlFor="statistic-week" className="statistic__filters-label">Week</label>

    <input type="radio" className="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-month" value="month" />
    <label htmlFor="statistic-month" className="statistic__filters-label">Month</label>

    <input type="radio" className="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-year" value="year" />
    <label htmlFor="statistic-year" className="statistic__filters-label">Year</label>
  </form>
);

export default Filters;
