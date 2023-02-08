import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { KEY_ESCAPE } from '../../../const';

const Close: React.FC = (): JSX.Element => {
  const navigate = useNavigate();

  useEffect(() => {
    const onKeyDownEsc = (evt: KeyboardEvent) => {
      if (evt.key === KEY_ESCAPE) {
        evt.preventDefault();
        navigate(-1);
      }
    };

    document.addEventListener('keydown', onKeyDownEsc);
    return () => {
      document.removeEventListener('keydown', onKeyDownEsc);
    };
  });

  const handleCloseCLick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    navigate(-1);
  };

  return (
    <div className="film-details__close">
      <button className="film-details__close-btn" onClick={handleCloseCLick} type="button">close</button>
    </div>
  );
};

export default Close;
