const TextList: React.FC = (): JSX.Element => (
  <ul className="statistic__text-list">
    {/* {props.textItems.map((textItem) =>
      <li key={textItem.id} className="statistic__text-item">
        <h4 className="statistic__item-title">{title}</h4>
        <p className="statistic__item-text">{text} <span className="statistic__item-description">{description}</span></p>
      </li>
    )} */}
    <li className="statistic__text-item">
      <h4 className="statistic__item-title">You watched</h4>
      <p className="statistic__item-text">22 <span className="statistic__item-description">movies</span></p>
    </li>
    <li className="statistic__text-item">
      <h4 className="statistic__item-title">Total duration</h4>
      <p className="statistic__item-text">130 <span className="statistic__item-description">h</span> 22 <span className="statistic__item-description">m</span></p>
    </li>
    <li className="statistic__text-item">
      <h4 className="statistic__item-title">Top genre</h4>
      <p className="statistic__item-text">Sci-Fi</p>
    </li>
  </ul>
);

export default TextList;
