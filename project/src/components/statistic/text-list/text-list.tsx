import { textList } from '../../../mock/statistic-text-list';

const TextList: React.FC = (): JSX.Element => (
  <ul className="statistic__text-list">
    {
      textList.map((textItem) => (
        <li key={textItem.id} className="statistic__text-item">
          <h4 className="statistic__item-title">{textItem.title}</h4>
          <p className="statistic__item-text">{textItem.text1}
            {textItem.description1 && <span className="statistic__item-description">{textItem.description1}</span>}
            {textItem.text2}
            {textItem.description2 && <span className="statistic__item-description">{textItem.description2}</span>}
          </p>
        </li>
      ))
    }
  </ul>
);

export default TextList;
