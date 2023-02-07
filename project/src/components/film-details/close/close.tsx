import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../../const';

const Close: React.FC = (): JSX.Element => {
  const navigate = useNavigate();

  const handleCloseCLick = () => {
    navigate(AppRoute.Main);
  };

  return (
    <div className="film-details__close">
      <button className="film-details__close-btn" onClick={handleCloseCLick} type="button">close</button>
    </div>
  );
};

export default Close;
